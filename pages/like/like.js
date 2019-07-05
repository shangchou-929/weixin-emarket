// pages/like/like.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    likeProlist:[]
  },

  //查看商品详情
  previewDetail: function(e){
    console.log(e)
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  },

//删除商品
  delProduct: function(e){
    var delIndex = e.currentTarget.dataset.index;
    var id = e.currentTarget.dataset.id;
    var data = this.data.likeProlist;
    var pro = wx.getStorageSync('productlist');
    console.log(pro)
    var index = wx.getStorageSync('cIndex');
    for(var i = 0; i < pro[index].length; i++){
      if(pro[index][i].id === id){
        pro[index][i].heart = '../../images/like.png';
      }
    }
    wx.setStorageSync('productlist', pro);

    data.splice(delIndex , 1);

    this.setData({
      likeProlist: data
    })
    wx.setStorageSync('likeData', this.data.likeProlist);

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    var likeProlist = wx.getStorageSync('likeData');
    this.setData({
      likeProlist: likeProlist
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