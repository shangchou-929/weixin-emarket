// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentPro: [],
    remindImg : '../../images/remind.png',
    insuranceImg: '../../images/insurance.png',
    moreImg: '../../images/more.png',
    serviceImg: '../../images/service.png',
    shopImg: '../../images/prolist.png',
    cartsImg: '../../images/shop.png'
  },

//跳转到立即支付页面
  goPay: function(e){
    var id =e.currentTarget.dataset.id;
    var buyItems = wx.getStorageSync("buyItems") || [];
    buyItems.push({
      id: e.currentTarget.dataset.id,
      name: e.currentTarget.dataset.title,
      image: e.currentTarget.dataset.image,
      price: e.currentTarget.dataset.price,
      value: 1,
      selected: true
    })
    wx.setStorageSync('buyItems', buyItems)
     wx.navigateTo({
      url: '../buy/buy?id=' +id
    })
  },

//加入购物车
  addCart: function(e){
    console.log(e)
    var cartItems =wx.getStorageSync("cartItems") || [];
    var exist = cartItems.find(function(el){
      return el.id == e.target.dataset.id;
    });


    if(exist){
      exist.value = parseInt(exist.value) + 1;
    } else{
      cartItems.push({
        id: e.currentTarget.dataset.id,
        name: e.currentTarget.dataset.title,
        image: e.currentTarget.dataset.image,
        price: e.currentTarget.dataset.price,
        value: 1,
        selected: true
      })
    };

    wx.showToast({
      title: "加入购物车成功！",
      duration: 1000

    })

    wx.setStorageSync('cartItems', cartItems)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    //获取ID
    var queryId = options.id;
    //获取缓存数据
    var proData = wx.getStorageSync('productlist');
    var index = wx.getStorageSync('cIndex');
    // console.log(proData)

    //根据id查找商品
    for(var i = 0 ; i < proData[index].length; i++){
      if(queryId == proData[index][i].id){
        
        this.setData({
          currentPro: proData[index][i]
        })
        break;
      }
    }
    
  },

  
})