<template>
  <div>
    <h1>自定义ref </h1>

    <input type="text" v-model="keyWord"/>
    <h3>{{ keyWord }}</h3>
  </div>
</template>


<script>
import { ref, customRef} from 'vue';
 
  export default {
    setup() {
      // 自定义ref
      function myRef(value){
        return customRef((track, trrigger) => {
          return {
            get() {
              console.log('有人获取到了ref数据')
              track() // 通知vue追踪value值的变化
              return value
            },
            set(newValue) {
              console.log('有人把myRef修改了')
              value = newValue  // 修改数据
              trrigger()  // 通知vue重新解析模板
            }
          }
        })
      }
      // let keyWord = ref('hello') // 使用vue提供的ref
      let keyWord = myRef('hello')


      return {
        keyWord
      }
    }
  }
</script>