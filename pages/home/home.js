// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //屏幕宽度
    screenWidth: 0,
    //轮播图宽度
    swiperWidth: 0,

    //
    bottomImgHeight: 0,
    
    //轮播图片
    swiperImgs: [
      {
        img: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/58837/2/1673/127369/5cf7aed1Ec5b3f588/a3756e806b5c4d3a.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/64730/23/3110/88147/5d14913fE407e3032/b69a57204d404573.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/74572/38/1196/97936/5cf7b2f8E3fbeff25/68f7cc199affdaf0.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/46850/28/3821/128623/5d1990f2Eb6f5fab0/1437bc90bccb4b80.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/23112/33/6431/99212/5c540d7fEf8000223/fddb6b047c02ba3d.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      }
    ],

    //是否显示轮播点
    isHasDots: true,
    //未激活轮播点的颜色
    dotsColor: 'rgba(26, 173, 25, .35)',

    //激活点颜色
    dotsActiveColor: '#d81e06',

    //自动轮播
    isAutoPlay: true,

    //轮播时间
    interval: 2500,

    //动画执行时间
    duration: 300,

    //循环轮播
    isCircular: true,


    //导航栏
    homeList: [
      {
        img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
        name: '京东超市'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp',
        name: '数码电器'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp',
        name: '京东服饰'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png.webp',
        name: '京东生鲜'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp',
        name: '京东到家'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
        name: '充值缴费'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
        name: '9.9元拼'
      },
      {
        img: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
        name: '领劵'
      }
    ],

    bottomImg : [
      {
        img:'https://m.360buyimg.com/mobilecms/s750x230_jfs/t1/64875/18/3435/56716/5d1a2d0eE2b2b9f85/6c3d35319c0e6dae.png!q70.jpg.dpg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取系统信息
    var info = wx.getSystemInfoSync();
    //更新数据
    this.setData({
      screenWidth: info.screenWidth
    })
  },

  //图片加载完成
  loadedImg: function(e){
    // console.log(e)
    var originWidth = e.detail.width;
    var originHeight = e.detail.height;

    var height = this.data.screenWidth / originWidth * originHeight;

    this.setData({
      swiperHeight: height
    })

  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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