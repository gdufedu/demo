// pages/detail/detail.js
let datas = require('../../datas/list-data.js');
let appDatas = getApp();
console.log(appDatas,typeof appDatas);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    index: null,
    isCollected: false,
    isMusicPlay:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let index=options.index;
    this.setData({
      detailObj:datas.list_data[index],
      index
    });
    let detailStorage = wx.getStorageSync('isCollected');
    if (!detailStorage) {
      wx.setStorageSync('isCollected', {});
    }
    if (detailStorage[index]) {
      this.setData({
        isCollected: true
      });
    }
    const BackgroundAudioManger = wx.getBackgroundAudioManager()
    BackgroundAudioManger.onPlay(() => {
      console.log('音乐播放');
      this.setData({
        isMusicPlay: true
      });
      appDatas.data.isPlay = true;
      appDatas.data.pageIndex = index;
    });
    if (appDatas.data.isPlay && appDatas.data.pageIndex === index) {
      this.setData({
        isMusicPlay: true
      });
    }
    BackgroundAudioManger.onPause(() => {
      console.log('音乐暂停');
      this.setData({
        isMusicPlay: false
      });
      appDatas.data.isPlay = false;     
    });
  },
  handleCollection(){
    let isCollected = !this.data.isCollected;
    this.setData({
      isCollected
    });
    let title = isCollected ? "收藏成功" : "取消收藏";
    wx.showToast({
      title,
      icon: 'success'
    });
    let { index } = this.data;
    wx.getStorage({
      key: 'isCollected',
      success: (datas) => {
        let obj = datas.data;
        obj[index] = isCollected;    
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success:()=> {
            console.log('缓存成功');            
          }
        });
      }
    });    
  },
  handleMusicPlay() {
    let isMusicPlay = !this.data.isMusicPlay;
    this.setData({
      isMusicPlay
    });
    if (isMusicPlay) {
      let { dataUrl, title } = this.data.detailObj.music;
      wx.playBackgroundAudio({
        dataUrl,
        title
      });
    } else {
      wx.pauseBackgroundAudio();
    }
  },
  handleShare() {
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到QQ空间', '分享到微博']
    });
  }
})