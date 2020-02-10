var newsData = require("../data/newsdata.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    circular: true,
    userData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userData: newsData.initData
    });
  },
  goNewsDetail: function(event) {
    var newsId = event.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: 'news-detail/news-detail?newsid=' + newsId,
    });
  }
})