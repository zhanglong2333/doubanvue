<template>
   <div class="banner">
    <tittle></tittle>
    <banner></banner>
   </div>
</template>

<script>
    import tittle from "../components/tittle"
    import banner from "../components/banner"
export default {
    name:'home',
    components:{tittle,banner},
    data(){
        return{

        }
    }
}

</script>

<style scoped>
    .banner{
        margin-top: .8rem /* 60/75 */;
    }
    
</style>
