var app = getApp();
var utils = require('../../util/utils.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var movieId = options.movieId;
    var detailMovieUrl = app.globalUrl.doubanUrl + "/v2/movie/subject/" + movieId;
    utils.http(detailMovieUrl, this.callback);
  },
  callback: function(data) {
    if(!data) return;
    var director = {
      avatar: "",
      name: "",
      id:""
    };
    if(data.directors[0] != null) {
      if(data.directors[0].avatars != null) {
        director.avatar = data.directors[0].avatars.large;
      }
      director.name = data.directors[0].name;
      director.id = data.directors[0].id;
    }
    var temp = {
      movieImg:data.images.large,
      country: data.countries[0],
      title: data.title,
      originalTitle:data.original_title,
      wishCount:data.wish_count,
      commentCount:data.comments_count,
      year: data.year,
      generes:data.genres,
      stars: utils.converToStarsArray(data.rating.stars),
      score:data.rating.average,
      director: director,
      casts: utils.convertToCastString(data.casts),
      castsInfo: utils.convertToCastsString(data.casts),
      summary: data.summary
    };
    this.setData({
      movie: temp
    });
    wx.setNavigationBarTitle({
      title: utils.cutTitleString(this.data.movie.title, 0, 6)
    });
  }
})