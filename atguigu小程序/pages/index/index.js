// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'北方汉子',
    userInfo:{},
    isShow:true
  },
  handleClick(){
    wx.switchTab({
      url: '/pages/list/list',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
  },
  getUserInfo(){
    wx.getSetting({
      success: (data) => {
        console.log(data);
        if (data.authSetting['scope.userInfo']) {
          this.setData({
            isShow: false
          });
        } else {
          this.setData({
            isShow: true
          });
        }
      }
    }),
      wx.getUserInfo({
        success: (data) => {
          this.setData({
            userInfo: data.userInfo
          });
        },
        fail: () => {
          console.log('获取用户数据失败');
        }
      })
  },
  handleGetUserInfo(data){
   if(data.detail.rawData){
     this.getUserInfo();
   }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady 监听页面初次渲染完成');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow 监听页面显示');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide 监听页面隐藏');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})