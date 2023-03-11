<template>

</template>

<script>
import {ref,isRef, reactive, isReactive, isReadonly, isProxy, readonly} from 'vue'
  export default{
    setup() {
      let sum = ref(0)
      let car = reactive({
        name: '奔驰',
        price: '40w' 
      })
      console.log(isRef(sum))
      console.log(isReactive(car))
      console.log(isReadonly(sum))
      console.log(isProxy(car))
      /*

        isRef 
      
      */ 

      return{

      }
    }
  }
</script>