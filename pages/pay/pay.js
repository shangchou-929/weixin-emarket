// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartItems:[],
    sum: 0,
    address: {},
    array: ['不限时送货时间', '工作日送货', '双休日、假日送货'],
    index: 0,
    hasAddress: false,
  },

  select:function(e){
    console.log(e)
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var cartItems = wx.getStorageSync('cartItems');
    var sum = wx.getStorageSync('sum');
    this.setData({
      cartItems: cartItems,
      sum: sum
    })
    console.log(this.data)
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
    var _this = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        console.log(res)
        _this.setData({
          address: res.data,
          hasAddress: true
        })
      },
    })
  },

  pay: function(e){
    wx.showModal({
      title: '支付提示',
      content: '本程序仅用于演示，支付接口API已屏蔽',
      showCancel: false,
      success: function(res) {
        console.log('用户点击确定')
      }
    })
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
    
  }

 
})