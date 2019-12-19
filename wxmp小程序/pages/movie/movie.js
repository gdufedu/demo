var app = getApp();
var utils = require("../util/utils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comingSoon: [],
    inTheaters: [],
    Top250: [],
    containerShow: true,
    searchPanelShow: false,
    searchData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var inTheaters = app.globalUrl.doubanUrl +"/v2/movie/in_theaters?start=0&count=3";
    var comingSoon = app.globalUrl.doubanUrl +"/v2/movie/coming_soon?start=0&count=3";
    var Top250 = app.globalUrl.doubanUrl +"/v2/movie/top250?start=0&count=3";
    this.http(inTheaters, this.callback, "inTheaters", "正在热映");
    this.http(comingSoon, this.callback, "comingSoon", "即将上映");
    this.http(Top250, this.callback, "Top250", "排行榜");
    wx.showNavigationBarLoading();
  },
  http: function (url, callback, category, categoryName) {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/xml'
      },
      success: function (res) {
        callback(res.data, category, categoryName);
      }
    });
  },
  callback: function (res, category, categoryName) {
    var movies = [];
    for (var idx in res.subjects) {
      var subject = res.subjects[idx];
      var title = subject.title;
      if(title.length >= 0) {
        title = title.substring(0, 6) + '...';
      }
      var temp = {
        title: title,
        coverageUrl : subject.images.large,
        star: utils.converToStarsArray(subject.rating.stars),
        average : subject.rating.average,
        movieid : subject.id
      };
      movies.push(temp);
    }
    var readyData = {};
    readyData[category] = {
      categoryName: categoryName,
      movies: movies
    };
    this.setData(readyData);
    wx.hideNavigationBarLoading();
  },
  movieMoreTap: function(event) {
    var categoryName = event.currentTarget.dataset.categoryname;
    wx.navigateTo({
      url: 'movie-more/movie-more?categoryname=' + categoryName
    });
  },
  goMovieDetail: function (event) {
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: 'movie-detail/movie-detail?movieId=' + movieId
    });
  },
  onBindFocus: function(event) {
    this.setData({
      containerShow:false,
      searchPanelShow:true
    });
  },
  onBindBlur: function (event) {
    var text = event.detail.value;
    var searchUrl = app.globalUrl.doubanUrl + '/v2/movie/search?q=' + text;
    this.http(searchUrl, this.callback,"searchData", "");
    wx.showNavigationBarLoading();
  },
  onCancelImgTap: function (event) {
    this.setData({
      containerShow: true,
      searchPanelShow: false
    });
  }
})