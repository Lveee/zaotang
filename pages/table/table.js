
Page({

  data: {
    //定义一个名为listdata的数组

    /*listData: [

      { "code": "01", "text": "有人", "type": "预约" },

      { "code": "02", "text": "有人", "type": "预约" },

      { "code": "03", "text": "有人", "type": "预约" },

      { "code": "04", "text": "有人", "type": "预约" },

      { "code": "05", "text": "有人", "type": "预约" },

      { "code": "06", "text": "有人", "type": "预约" },

      { "code": "07", "text": "有人", "type": "预约" }

    ],*/
    isChecked:false
    
  },

  //onLoad: function () {

    //console.log('onLoad')

  //},
  onLoad: function (options) {
    var app = getApp();
    var value = app.globalData.pir.datapoints[0].value
    if (value == 0.00) {
      this.setData({ "condition": false });
    } else {
      this.setData({ "condition": true });
    }
  },


  click() {

    this.setData({

      isChecked: true

    })

  }


})
