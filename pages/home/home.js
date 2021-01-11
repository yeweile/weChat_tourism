// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[{
      id:1,
      imgUrl:"../images/1.jpg"
    },{
      id:2,
      imgUrl:"../images/2.jpg"
    },{
      id:3,
      imgUrl:"../images/3.jpg"
    }],

    icons:[{
      name:"景点",
      imgUrl:"../images/spot.png"
    },{
      name:"酒店",
      imgUrl:"../images/hotel.png"
    },{
      name:"餐饮",
      imgUrl:"../images/drink.png"
    },{
      name:"机票",
      imgUrl:"../images/plane.png"
    },{
      name:"购物",
      imgUrl:"../images/shopping.png"
    },{
      name:"附近",
      imgUrl:"../images/next.png"
    }],
    article:[{
      title:"清明小长假",
      imgUrl:"../images/article/qingming.png",
      link:"../article01/article01"
    },{     
        title:"日本赏樱",
        imgUrl:"../images/article/sakura.png",
        link:"../article02/article02"   
    }]
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