<template>
  <div>
    <h1>hook函数</h1>
    <h2>当前点击时鼠标的坐标为： x： {{ point.x }}, y: {{ point.y }}</h2>
  </div>
</template>


<script>
/*
  什么是hook
    本质是一个函数，把setup函数中使用的组合式api（composition API）进行了封装
    类似于vue2中的mixin
    自定义hook的优势；复用代码让setup中的逻辑更简单易懂
*/
  import usePoint from '@/hooks/usePoint'
  export default{
    setup() {
      let point =  usePoint()
      return point
    }
  }
</script>