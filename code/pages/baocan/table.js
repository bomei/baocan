// pages/baocan/table.js
Page({
  data: {
    listData: [
      {'date':'2018-03-20'},
      {'date': '2018-03-22'},
      {'date': '2018-03-23' },
    ],
    checkedData: {},
  },
  onLoad: function () {
    console.log('onLoad')
    let today=new Date()
    console.log()
    let listData=[]
    for(let i=0;i<7;++i){
      listData.push({'date':today.toLocaleDateString()})
      today.setDate(today.getDate()+1)
    }
    this.setData({
      listData: listData
    })

  },
  handlecheck: function(e) {
    let checked = e.detail.value
    // console.log(checked)
    let tmp=0
    // console.log(tmp)
    let date = checked[0]
    console.log(date)
    tmp = this.data.checkedData
    tmp[date]=checked.slice(1)
    
    // console.log(tmp)
    // this.date=e.detail.value[0]
    // this.checkedData[date] ={} 
    // this.checkedData[date]=checked
    this.setData({
      checkedData: tmp
    })
    console.log('checkedData')
    console.log(JSON.stringify(this.data.checkedData))
  },
  popListElement: function(el){

  }

})