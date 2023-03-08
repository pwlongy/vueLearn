<template>
  <div>
      <h1>生命周期函数</h1>
      <hr/>
  </div>
</template>

<script>
// vue3中提供了组合式api形式的生命周期钩子， 与vue2中的额钩子对应关系如下
/*
  beforCreate ==> setup()
  Create ==> setup()
  beforMount ==> onBeforMount()
  mounted ==> onMounted()
  beforUpdate ==> onBeforUpdate()
  updated ==> onUpdate()
  beforUnmount ==> onBeforUmount()
  unmounted ==> onUnmounted()
*/
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';
  export default{
    setup(props) {
      onBeforeMount(() => {
        console.log('----onBeforeMount------')
      })
      onMounted(() => {
        console.log('----onMounted------')
      })
      onBeforeUpdate(() => {
        console.log('----onBeforeUpdate------')
      })
      onUpdated(() => {
        console.log('----onUpdated------')
      })
      onBeforeUnmount(() => {
        console.log('----onBeforeUnmount------')
      })
      onUnmounted(() => {
        console.log('----onUnmounted------')
      })
      return{

      }
    },
    
    beforCreate() {
      console.log('----beforCreate------')
    },
    created() {
      console.log('----created------')
    },
    beforeMount() {
      console.log('----beforeMount------')
    },
    mounted(){
      console.log('----mounted------')
    },
    beforeUpdate() {
      console.log('----beforeUpdate------')
    },
    updated() {
      console.log('----updated------')
    },
    // 在vue3中销毁前与销毁后的钩子函数发生了改变
    beforeUnmount(){
      console.log('-------beforeUnmount--------')
    },
    unmount(){
      console.log('-------unmount--------')
    },
  }
</script>