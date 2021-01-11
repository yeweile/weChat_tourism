// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,
    avatarUrl:"../images/portrait.png",
    nickName: "yourname",
    weather:"获取天气"
  },
  switchChange:function(e){
    // console.log(e)
    if(e.detail.value){
      wx.request({
        url: 'https://free-api.heweather.com/s6/weather/now?parameters',
        data:{
          location:"杭州",
          key:"1a648085384740ed9938d10098c1dc8f"
        },
        success:(res)=>{
          // console.log(res)
          var location = res.data.HeWeather6[0].basic.location;
          var weather = res.data.HeWeather6[0].now.cond_txt;
          var tmp = res.data.HeWeather6[0].now.tmp;
          this.setData({
            weather:location+" "+weather+" "+tmp + "度"
          })
        }
      })
    }else{
      this.setData({
        weather:"获取天气"
      })
    }
  },
  toBlog:function(){
    wx.navigateTo({
      url: '../blog/blog',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              console.log(res.userInfo)
              var nickname = res.userInfo.nickName;
              var avatar = res.userInfo.avatarUrl;
              this.setData({
                nickName: nickname,
                avatarUrl: avatar,
                show: false
              })
            }
          })
        }
      }
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