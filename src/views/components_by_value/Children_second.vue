<template>
    <div class="">
        第二个子组件
    </div>
</template>


<script>
// 兄弟组件传值
import eventBus from './eventBus'


export default {
    name: "",
    data() {
        return {

        }
    },
    components: {
    },
    methods: {

    },
    created(){
        eventBus.$on('add',function(res,str){
            console.log(res,str);
        })
    }
}
</script>

<style>

</style>
