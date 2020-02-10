//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    proList:[
      {
        img:'/images/pro_01.jpg',
        title:'精英贷',
        shortDesc:'22周岁以上即可\n最快3小时下款\n件均8万，最高20万'
      },
      {
        img: '/images/pro_02.jpg',
        title: '月供贷',
        shortDesc: '不看工作，不看流水\n不限地区，无须家人签字\n最高可做150万'
      },
      {
        img: '/images/pro_03.jpg',
        title: '保单贷',
        shortDesc: '凭祥版征信和保单\n官网账号密码就可进件\n最高可做150万'
      }
    ]
  },
  
  onLoad: function () {
    this.setData({
      test:'01'
    });
  },
  toDetail:function(e){
    let index=e.currentTarget.dataset.index;
  }
})
