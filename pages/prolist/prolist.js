// pages/prolist/prolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    hidden: false,
    curNav: 1, //导航栏标志
    curIndex: 0, //导航栏索引
  
    //列表数据
    navList: [{
        id:1,
        name: '精选'
      },
      {
        id: 2,
        name: '生活'
      },
      {
        id: 3,
        name: '美妆'
      },
      {
        id:4,
        name: '电器'
      }
    ],


    //商品数据
    prolist: [
      [{
          id: 'A001',
          img: 'http://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/20850/4/12652/553549/5c99eedaEcf2ffa12/06b39710d4dc2ae7.jpg!q70.dpg',
          name: '客厅玄关装饰画原创手绘油画现代简约一帆风顺帆船抽象流水风景欧式书房餐厅酒店公寓过道走廊装饰竖挂壁画 A 金色实木外框 带框60x90',
          price: 612,
          isPlus: true,
          isHot: false,
          hotText: '',
          heart: '../../images/like.png'
        },

        {
          id: 'A002',
          img: 'http://img10.360buyimg.com/mobilecms/s372x372_jfs/t17392/350/1119356793/78184/4beaac5a/5abb1597Na95a1405.jpg!q70.dpg',
          name: '守护宝（上海中兴）F5 远程控制 老人智能手机 3G+32G 金色',
          price: 499,
          isPlus: false,
          isHot: false,
          hotText: '',
          heart: '../../images/like.png'
        },

        {
          id: 'A003',
          img: 'http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/39852/19/9330/576235/5d09fcf1Ed5660b3b/21053cf68d8c53df.jpg!q70.dpg',
          name: '百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋',
          price: 18.9,
          isPlus: true,
          isHot: true,
          hotText: '满减',
          heart: '../../images/like.png'
        },
      ],
      [{
          id: 'A004',
          img: 'http://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/62592/30/1878/163127/5d02f650Ee0e197c4/f2edcb7672a95e62.jpg!q70.dpg',
          name: '尤尼克斯YONEX羽毛球拍 yy日本进口超轻全碳素林丹李宗伟男女防守进攻单拍天斧ASTROX99 NS9900 经典双打拍 金色',
          price: 1342,
          isPlus: false,
          isHot: true,
          hotText: '拼购',
          heart: '../../images/like.png'
        },

        {
          id: 'A005',
          img: 'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/25134/30/15481/285216/5caff859Ebddfc60d/9d5b4e8ce44d307b.jpg!q70.dpg',
          name: '小辣椒 红辣椒Q20 2GB+16GB 黑色 学生老人手机 智能商务手机 移动联通电信4G 双卡双待',
          price: 469,
          isPlus: false,
          isHot: true,
          hotText: '新品',
          heart: '../../images/like.png'
        },

        {
          id: 'A006',
          img: 'http://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14379/8/6142/281112/5c4976a0E08d8961a/39bb169fc2a909aa.jpg!q70.dpg',
          name: '欧莱雅（LOREAL）复颜抗皱紧致护肤化妆品套装礼盒（柔肤130ml+乳液110ml+乳液50ml+柔肤水65ml）',
          price: 359,
          isPlus: false,
          isHot: false,
          hotText: '',
          heart: '../../images/like.png'
        },

        {
          id: 'A007',
          img: 'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t28801/347/1482350828/256506/75e9ace4/5ce26278Na80073a6.jpg!q70.dpg',
          name: 'ELLE HOMME时尚男士短款钱包 细腻牛皮横款钱夹 商务礼盒装票价ED787502820黑色',
          price: 99,
          isPlus: false,
          isHot: true,
          hotText: '新品',
          heart: '../../images/like.png'
        },

      ],
      [
        {
          id: 'A008',
          img: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/53671/7/2066/251438/5cfe3401E9d45e384/4c74102f4ff313d6.jpg!q80.dpg.webp',
          name: '【第2支1元】ZEESEA 滋色保湿口红是非不掉色不沾杯 润唇膏女士姿色枫叶红唇釉唇彩唇蜜套装 黑管813#枫叶色',
          title:'ZEESEA口红',
          price: 69.8,
          isPlus: false,
          isHot: true,
          hotText: '拼购',
          heart: '../../images/like.png'
        },
        {
          id: 'A009',
          img: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/51737/33/2878/51842/5d0bbc46E1f702040/18b48d4d4cf93df1.jpg!q80.dpg.webp',
          name: '完美日记 琉璃时光唇釉持妆久保湿滋润防水染唇液唇蜜唇彩 809 榛子焦糖',
          title: '完美日记口红',
          price: 39.9,
          isPlus: true,
          isHot: true,
          hotText: '拼购',
          heart: '../../images/like.png'
        },
        {
          id: 'A0010',
          img: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t28003/63/126770621/414651/3a6335c/5be8d8dcN77dd8dea.jpg!q80.dpg.webp',
          name: 'ZEESEA 滋色蜜粉饼13g 控油遮瑕定妆粉散粉 姿色干粉饼持久保湿底妆粉底高光修容晚安粉气垫美妆 自然肤色',
          title: 'ZEESEA滋色蜜粉饼',
          price: 69.9,
          isPlus: false,
          isHot: true,
          hotText: '新品',
          heart: '../../images/like.png'
        },
        {
          id: 'A0011',
          img: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t22015/20/2590135693/205952/da56fbe3/5b5e6f8aN1f7f7182.jpg!q80.dpg.webp',
          name: 'Sweet Color 洗甲水 牛油果精华卸甲 温和配方 卸指甲油 30ML',
          title: '卸指甲油 ',
          price: 26,
          isPlus: false,
          isHot: true,
          hotText: '新品',
          heart: '../../images/like.png'
        },
      ],
      [
        {
          id: 'A0012',
          img: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t27196/353/1754742110/183994/ddf2f826/5bebdae1Ne48273c1.jpg!q80.dpg.webp',
          name: '小熊（Bear） 酸奶机 家用全自动米酒机不锈钢内胆 陶瓷4分杯 SNJ-B10K1',
          title: '酸奶机 ',
          price: 99,
          isPlus: false,
          isHot: true,
          hotText: '拼购',
          heart: '../../images/like.png'
        },
        {
          id: 'A0013',
          img: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/74325/13/282/149555/5ce7d56fE26851da3/36824cae2655ede3.jpg!q80.dpg.webp',
          name: '雀巢多趣酷思(Dolce Gusto)咖啡机 家用 全自动 商用 胶囊机 Mini Me 黑色',
          title: '咖啡机 ',
          price: 708,
          isPlus: true,
          isHot: true,
          hotText: '新品',
          heart: '../../images/like.png'
        },
      ]
    ],

    productlist:[],


  },

  //导航栏切换

  selectNav: function(e) {
    //获取缓存，导航栏的索引cIndex
    wx.getStorageSync('cIndex');
    var index = parseInt(e.target.dataset.index),
      id = e.target.dataset.id;
      //更新数据
    this.setData({
      curIndex: index,
      curNav: id
    })
    //设置缓存
    var index = this.data.curIndex;
    wx.setStorageSync('cIndex', index);
  },

  //查看商品详情
  previewDetail: function(e) {

    //获取商品id和导航栏索引
    var id = e.currentTarget.dataset.id;
    var cIndex = wx.getStorageSync('cIndex');
    wx.setStorageSync('cIndex', cIndex);

    //跳转到商品详情页面
    wx.navigateTo({
      url: '../../pages/detail/detail?id=' + id,
    })
  },

  //喜欢收藏
  like: function(e) {
    //获取修改后的index和商品
    var index = e.currentTarget.dataset.index;
    var currentLike = this.data.prolist[this.data.curIndex][index];

    currentLike.heart = "../../images/like_active.png";

    this.data.prolist[this.data.curIndex][index] = currentLike;
    //更新数据
    this.setData({
      prolist: this.data.prolist
    })

    wx.setStorageSync('productlist', this.data.prolist);
    //获取缓存
    var likeData = wx.getStorageSync('likeData');
    likeData = likeData ? likeData : [];

    //判断商品是否已收藏
    if (likeData.length > 0) {
      for (var i = 0; i < likeData.length; i++) {
        if (currentLike.id == likeData[i].id) {
          wx.showToast({
            title: '该商品已存在',
            icon: 'none'
          })
          return;
        }
      }
    }

    currentLike.delIcon = '../../images/delete.png';
    //向likeData添加收藏的商品
    likeData.unshift(currentLike);
    // console.log(likeData)

    //设置缓存
    wx.setStorageSync('likeData', likeData);

    //提示收藏成功
    wx.showToast({
      title: '已成功收藏',
      icon: 'none'
    })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //设置商品缓存

    //默认导航栏的索引值为0
    var cIndex = 0;
    wx.setStorageSync('cIndex', cIndex);
  },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var prolist = this.data.prolist;
    wx.setStorageSync('productlist', prolist);
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var productlist = wx.getStorageSync('productlist');
    this.setData({
      productlist: productlist
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})