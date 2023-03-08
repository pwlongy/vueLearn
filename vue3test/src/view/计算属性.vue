<template>
  <div>
    <h1>计算属性</h1>
    姓：<input type="text" v-model="person.fristName"/>
    名: <input type="text" v-model="person.lastName"/>
    <!-- {{ person.fullName }} -->
    <input v-model="person.fullName"/>
  </div>
</template>

<script>
import {reactive, computed} from 'vue'
  export default{
    // computed: {
    //   fullName() {
    //     return this.person.fristName + '-' + this.person.lastName
    //   }
    // },
    setup() {
      let person = reactive({
        fristName: '',
        lastName: ''
      })

      // 计算属性
      // let fullName  = computed(() => {
      //   return person.fristName+ '-' + person.lastName
      // })
      // 计算属性-简写（没有考虑计算属性被修改的情况）
      // person.fullName  = computed(() => {
      //   return person.fristName+ '-' + person.lastName
      // })

      // 计算属性--完整写法（考虑读和写）
      person.fullName  = computed({
        get(){
          return  person.fristName+ '-' + person.lastName
        },
        set(value){
          const name = value.split('-')
          person.fristName = name[0]
          person.lastName = name[1]
        }
      })
      return{
        person,
        // fullName
      }
    }
  }
</script>