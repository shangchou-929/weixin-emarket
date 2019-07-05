// pages/shopcart/shopcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartItems: [],
    total: 0,
    CheckAll: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var cartItems = wx.getStorageSync('cartItems');
    this.setData({
      cartItems: cartItems,
      cartList: false
    })
    console.log(cartItems)
    this.getsumTotal()
  },

//全选
  select:function(){
    var CheckAll = this.data.CheckAll;
    CheckAll = !CheckAll;
    var cartItems = this.data.cartItems;

    for(var i = 0; i < cartItems.length; i++){
      cartItems[i].selected = CheckAll
    }

    this.setData({
      cartItems: cartItems,
      CheckAll: CheckAll
    });

    this.getsumTotal()

  },

//增加
  add:function(e){
    var cartItems = this.data.cartItems;
    var index = e.currentTarget.dataset.index;
    var value = cartItems[index].value;

    value++;
    cartItems[index].value = value;
    this.setData({
      cartItems:cartItems
    })

    this.getsumTotal()
    wx.setStorageSync("cartItems", cartItems)
  },

//减少
  reduce:function(e){
    var cartItems = this.data.cartItems;
    var index = e.currentTarget.dataset.index;
    var value = cartItems[index].value;

    if(value == 1){
      value --;
      cartItems[index].value = 1;
    } else{
      value --;
      cartItems[index].value = value;
    }

    this.setData({
      cartItems: cartItems
    });
    this.getsumTotal()
    wx.setStorageSync('cartItems', cartItems)
  },

//商品的选择
  selectedCart: function(e){
    var cartItems = this.data.cartItems;
    var index = e.currentTarget.dataset.index;
    var selected = cartItems[index].selected;

    cartItems[index].selected = !selected;

    this.setData({
      cartItems: cartItems
    });
    wx.setStorageSync('cartItems', cartItems)
    this.getsumTotal()
  },

//删除商品
  deletecarts: function(e){
    var cartItems = this.data.cartItems;
    var index = e.currentTarget.dataset.index;
    cartItems.splice(index,1);
    this.setData({
      cartItems: cartItems
    });

    if(cartItems.length){
      this.setData({
        cartList: false
      })
    }
    this.getsumTotal()
    wx.setStorageSync('cartItems', cartItems);
  },

  //清空购物车
  go: function(e){
    this.setData({
      cartItems: []
    })
    wx.setStorageSync('cartItems', [])
  },

//计算商品总额
  getsumTotal: function(){
    var sum = 0;
    for(var i = 0; i < this.data.cartItems.length; i++){
      if( this.data.cartItems[i].selected){
        sum += this.data.cartItems[i].value * this.data.cartItems[i].price
      }
    }
    this.setData({
      total: sum
    })
    wx.setStorageSync('sum', sum)
  },

  //跳转到支付页面
  gopay: function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../pay/pay?id=' + id,
    })
  }

 
})