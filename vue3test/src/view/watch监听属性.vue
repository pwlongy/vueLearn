<template>
  <h1>watch监听属性</h1>
  <div>当前求和为{{ sum }}</div>
  <button @click="addSum">+1</button>
  <hr/>
  
  <div>msg信息{{ msg }}</div>
  <button @click="addMsg">+!</button>

  <hr/>
  <h2>人的基本信息</h2>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄： {{ person.age }}</h2>
  <h2>薪资： {{ person.job.a.price }}K</h2>
  <button @click="updataPerson">点击修改人的基本信息</button>
</template>

<script>
import {reactive, ref, watch, watchEffect} from 'vue'
  export default{
    setup(){
      const sum = ref(0)
      const msg = ref('你好啊')
      const person = reactive({
        name: '小明',
        age: 18,
        job: {
          a: {
            price: '15'
          }
        }
      })
      
      function addMsg () {
        msg.value+='!'
      }

      function addSum() {
        sum.value++
        addMsg()
      }
      function updataPerson (){
        person.name+='!'
        person.age++
        person.job.a.price++
      }
      
      // 监听
      // 监听ref定义的一个响应式数据
      // 
      // watch(sum, (newValue, oldValue) => {
      //   console.log(newValue, oldValue)
      // })

      // 监听ref所定义的多个响应式数据
      // 当ref所定义的是一个对象时，可以开启深度监视
      // watch(sum, (newValue, oldValue) => {
      //   console.log(newValue, oldValue)
      // })
      // watch(msg, (newValue, oldValue) => {
      //   console.log(newValue, oldValue)
      // })

      watch([sum,msg], (newValue, oldValue) => {
        console.log(newValue, oldValue)
      }, {immediate: true, })


      // 监听reactive所定义的全部响应式数据
      // 不管你嵌入的有多深都进行深度监视
      // 无法获取oldValue
      // watch(person, (newValue, oldValue) => {
      //   console.log(newValue, oldValue)
      // })

      // 监听reactive所定义的一个响应式数据中的某一个属性、
      // watch(() => person.age, (newValue, oldValue)=> {
      //   console.log(newValue, oldValue)
      // })

      // 监视reactive所定义的一个响应式数据中的一些数据
      // watch(() => [person.name, person.age], (newValue, oldValue) => {
      //   console.log(newValue, oldValue)
      // })

        //特殊情况
        // 由于监视的是reactive中定义对象中的某个属性（对象），所以需要使用deep
        watch(() => person.job, (newValue,oldValue) => {
          console.log(newValue, oldValue)
        }, {deep: true})


        //用到了谁就监听谁
        // watchEffect有点像computer
        // componented注重的时计算出来的值（回调函数的返回值），所以必须要写返回值
        // 而watchEffect更注重的是过程（回调函数的函数体），所以不需要写返回值
        watchEffect(()=> {
          const x1 = sum.value
          console.log("watchEffect回调执行了", )
        })

      return {
       sum,
       msg,
       person,
       addSum,
       addMsg,
       updataPerson
      }
    }
  }
</script>