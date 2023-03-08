<template>
  <!-- vue3 组件中的结构可以没有根标签 -->
  <div>{{ user }}</div>
  <button @click="spack">点击</button>
  <ResponsiveModel @hello="change" msg="hello"></ResponsiveModel>
  <jisuan></jisuan>
  <jianting></jianting>
  <lifeCycle></lifeCycle>
  <hookFun></hookFun>
</template>

<script>
import {h} from 'vue'
import ResponsiveModel from '@/view/响应式数据.vue'
import jisuan from '@/view/计算属性.vue'
import jianting from '@/view/watch监听属性.vue'
import lifeCycle from '@/view/生命周期.vue'
import hookFun from '@/view/自定义Hook函数.vue'
export default {
  components: {
    ResponsiveModel,
    jisuan,
    jianting,
    lifeCycle,
    hookFun
  },
  name: 'App',
  /*
    尽量不要与vue2配置混用
      vue2配置中的（data, methods, componented....）中可以访问到setup中的属性与方法
      在setup中无法访问vue2配置的数据方法
      如果vue2与vue3有重名数据。以vue3的数据优先
    setup 不能是一个async函数，因为返回值不再是return的对象，而是promise，模板看不到return 对象中的属性
      不能写成为 async setup
  */ 

  /*
    setup注意点
      setup执行的时机
        在beforCreate之前执行一次，this是undefinde
      setup的参数
        props: 值为对象，包含:组件外部传递过来，且组件内部声明接收了的属性
        content: 上下文对象
          attrs： 值为对象，包含组件外部传递过来，且组件内部声明接收了的属性
          slots：收到的插槽内容相当于this.$slots
          emit: 分发自定义事件的函数，相当于this.$emit
        

  */
  data() {
    return{
      name: 'xiaoming',
      age: 18,
    }
  },
  methods: {
    say() {
      console.log(111)
    }
  },
  setup() {
    let user = {
      name: '小明',
      age: 18
    }

    function spack(){
      console.log(`${user.name}${user.age}`)
    }
    // setup函数有两种返回值
    // 1， 若返回一个对象，则对象中的属性，方法，在模板中均可以直接使用
    return {
      user,
      spack
    }
    //返回一个函数
    // return () => h('h1', '111')
  }
}
</script>

