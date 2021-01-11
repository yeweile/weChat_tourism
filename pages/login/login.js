// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:"../images/register.png",
    tmpName:undefined,
    tmpPwd:undefined,
    userName:"",
    userPwd:""

  },
  getName:function(e){
    console.log(e.detail.value)
    this.setData({
      tmpName:e.detail.value
    })
  },
  getPwd:function(e){
    console.log(e.detail.value)
    this.setData({
      tmpPwd:e.detail.value
    })
  },
  setInfo:function(){
    if(this.data.tmpName && this.data.tmpPwd){
      if(this.data.userName==this.data.tmpName){
        wx.showToast({
          title: '用户名重复',
          icon:'none'
        })
      }else{
        this.setData({
          userName:this.data.tmpName,
          userPwd:this.data.tmpPwd
        })
        wx.showToast({
          title: '您已注册成功',
          icon:'none',
          duration:1600,
          success:()=>{
            this.setData({
              imgUrl:"../images/login.png"
            })
          }
        })
      }
    }else{
      wx.showToast({
        title: '请输入完整信息',
        icon:'none'
      })
    }
  },
  submitForm:function(e){
    if(this.data.userName != undefined || this.data.userPwd != undefined){
      if(this.data.userName == e.detail.value.userName && this.data.userPwd == e.detail.value.userPwd){
        wx.showToast({
          title: '登录成功',
          icon:'none',
          success:()=>{
            wx.setStorage({
              data: 'this.data.userName',
              key: 'userName',
              success:()=>{
                console.log("本地存储用户名成功");
              }
            });
            wx.setStorage({
              data: 'this.data.userPwd',
              key: 'userPwd',
              success:function(e){
                console.log(e,"本地存储密码成功");
              }
            });
            wx.switchTab({
              url: '../home/home',
            })
          }
        })
      }else{
        wx.showToast({
          title: '密码或用户名不正确',
          icon:'none'
        })
      }
    }else{
      wx.showToast({
        title: '请输入信息',
        icon:'none'
      })
    }
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key:'userName',
      success:function(res){
        console.log("有name缓存");
        wx.switchTab({
          url: '../home/home'
        })
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