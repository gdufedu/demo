var app = getApp();
var utils = require("../../util/utils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    totalCount: 0,
    totalMovies : [],
    isEmpty: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var categoryName = options.categoryname;
    this.setData({
      categoryName:categoryName
    });
    var publicUrl = app.globalUrl.doubanUrl;
    var allUrl = "";
    switch (options.categoryname) {
      case '正在热映':
        allUrl = publicUrl + "/v2/movie/in_theaters";
        break;
      case '即将上映':
        allUrl = publicUrl + "/v2/movie/coming_soon";
        break;
      case '排行榜':
        allUrl = publicUrl + "/v2/movie/top250";
        break;
    }
    this.setData({
      allUrl:allUrl
    });
    utils.http(allUrl,this.callback);
    wx.showNavigationBarLoading();
  },
  onPullDownRefresh: function() {
    var refreshUrl = this.data.allUrl;
    this.data.totalMovies = [];
    this.data.isEmpty = true;
    utils.http(refreshUrl, this.callback);
  },
  onReachBottom: function (event) {
    var nextUrl = this.data.allUrl + "?start=" + this.data.totalCount + "&count=20";
    utils.http(nextUrl, this.callback);
  },
  callback: function (res) {
    var movies = [];
    for (var idx in res.subjects) {
      var subject = res.subjects[idx];
      var title = subject.title;
      if (title.length >= 0) {
        title = title.substring(0, 6) + '...';
      }
      var temp = {
        title: title,
        coverageUrl: subject.images.large,
        star: utils.converToStarsArray(subject.rating.stars),
        average: subject.rating.average,
        movieid: subject.id
      };
      movies.push(temp);
    }
    var totalMovies = [];
    if(!this.data.isEmpty) {
      totalMovies = this.data.movies.concat(movies);
    } else {
      totalMovies = movies;
      this.data.isEmpty = false;
    }
    this.setData({
      movies: totalMovies
    });
    this.data.totalCount += 20;
    wx.hideNavigationBarLoading();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.categoryName
    });
  },
  goMovieDetail: function(event) {
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?movieId=' + movieId
    });
  }
})