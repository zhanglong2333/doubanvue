<template>
  <div class="title clearfix">
    <img src="../../static/img/douban_logo.png" alt="" class="tittle_left">
    <ul class="tiitle_right">
        <li style="color:#4CBDF7">电影</li>
        <li style="color:#E9B846">图书</li>
        <li style="color:#E9B846">广播</li>
        <li style="color:#2ABADB">小组</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tittle',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height:.666667rem /* 50/75 */;
  line-height: .666667rem /* 50/75 */;
  margin: 0 auto;
  background:url('../../static//img/promotion_bg.jpg');
  border-bottom: 1px solid #f3f3f3;
}
.tittle_left{
  height:.333333rem /* 25/75 */;
  width: .666667rem /* 50/75 */;
  float: left;
  margin-top: .16rem /* 12/75 */;
  padding-left: .266667rem /* 20/75 */;
}
.tiitle_right{
  float: right;
}
ul{
list-style:none;
  margin: 0;
  padding: 0;
}
li{
  margin: 0;
  padding: 0;
  float: left;
  font-size:.213333rem /* 16/75 */;
  padding-right:.266667rem /* 20/75 */;
}
.clearfix{
  clear: both;
  content: '';
}
</style>
