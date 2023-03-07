<template>
  <div>
    <!-- 组件传递的数据 -->
    <h3>{{ msg }}</h3>
    <h1>一个人的信息</h1>
    <h2>姓名： {{ name }}</h2>
    <h2>年龄： {{ age }}</h2>
    <h2>工作种类： {{ job.work }}</h2>
    <h2>工作薪水： {{ job.price }}</h2>
    <h2 v-if="job.address ">工作地点： {{ job.address }}</h2>
    <button @click="updataUser">修改用户信息</button>
    <button @click="addItem">添加一个对象属性</button>
    <button @click="delItem">删除一个对象属性</button>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
  export default{
    props: {
      msg: {
        type: String,
      }
    },
    emits: ['hello'],
    setup(props, content) {
      console.log(props, content)
      console.log(props.msg)
      // ref的作用是定义一个响应式的数据
      /*
        语法 const xxx = ref(xxxx)
          创建一个包含响应式数据的引用对象
          js中操作数据 xxx.value = xxx
          模板中读取数据不需要.value,在模板中会自动帮你定位到.value数据

        备注
          接收的数据可以是基本类型也可以是对象类型
          基本类型数据：响应式依然是靠object.defineProperty() 的get与set()完成的
          对象类型的数据，内部“求助”了vue3的一个新函数-----reactive
      */ 
        let name = ref('小明')
        let age = ref(18)


        /*
          reactive函数
            作用定义一个对象类型的响应式数据(基本类型不要使用他，要用ref)
            语法： const 代理对象 = reactive(源对象)接收一个对象（或数组），返回一个代理对象（proxy对象）
            reactive定义的相应式数据是深层次的
            内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据进行操作
        */
        const job = reactive({
          work: '前端工程师',
          price: '30k'
        })
      

        /*
          ref与reacvtive的对比
            从定义的角度对比
              ref用来定义基本数据类型
              reactive用来定义对象或数组类型数据
              ref也可以定义对象类型数据，他内部会自动通过reavtive转为代理对象
            从原理的角度对比
              ref通过object.defineProperty()的get与set来实现响应式
              reactive通过使用Proxy来实现响应式（数据劫持），并通过Reflect操作源对象内部的数据
            从使用的角度对比
              ref定义的数据，操作数据需要.value,读取数据时模板中直接读取不需要.value
              reactive定义的数据操作数据与读取数据都不需要.value
        */
      function updataUser(){
        name.value = '小红',
        age.value = 20

        job.work = 'ui工程师'
        job.price = '50k'
      }

      function addItem () {
        job.address = '1111' 
      }

      function delItem () {
        delete job.address
      }

      return{
        name,
        age,
        job,
        addItem, 
        delItem,
        updataUser
      }
    }
  }
</script>