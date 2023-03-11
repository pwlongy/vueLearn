<template>
    
</template>

<script>
import {reactive, provide, inject} from 'vue'
  export default{
    setup() {
      let car = reactive({
        name: '宝马',
        price: '40w'
      })
      // 向孙组件传递数据
      provide('car', car)
      // 获取到数据
      // let x = inject('car')
      return{

      }
    }
  }
</script>