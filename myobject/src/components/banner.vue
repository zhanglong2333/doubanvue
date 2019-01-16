<template>
    <div>
        <div class="banner ">
        <ul class="nav clearfix">
            <li>影院热映</li>
            <li>欧美新碟榜</li>
            <li>注册账号</li>
            <li>登录豆瓣</li>
        </ul>
    </div>
    </div>
</template>

<script>
export default {
    name:'banner',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    .banner{
        margin: 0 .133333rem /* 10/75 */;
    }
   .nav{
        padding: .266667rem /* 20/75 */;
        margin: 0 auto;
    }
    .nav li {
        width:45%;
        margin: .066667rem /* 5/75 */;
        font-size: .186667rem /* 14/75 */;
        text-align: center;
        line-height:.666667rem /* 50/75 */;
        background-color: #f6f6f6;
        float: left;
    }
</style>
