<template>
  <h1>toRef</h1>
  <h2>姓名： {{ name }}</h2>
  <h2>年龄： {{ age }}</h2>
  <h2>薪水： {{ salary }}k</h2>
  <button @click="name+='!'">姓名</button>
  <button @click="age++">年龄</button>
  <button @click="salary++">薪水</button>
</template>

<script>
import { ref, reactive, toRef, toRefs} from "vue";
  export default{
    setup() {
      const person = reactive({
        name: '小明',
        age: 18,
        salary: 18,
        type: {
          state: {
            number: 1
          }
        }
      })

      /*
        toref
          作用： 创建一个ref对象，其value值指向里一个对象中的某个属性
          语法： const name = toRef(person, 'name')
          应用： 要将响应式对象中的某一个属性单独提供给外部使用
          拓展： toRef与torefs功能一致，但是可以批量创建多个ref对象，语法toref（person)
      */

      // 返回的是一个ref对象， 相当于一个桥接对象
      const name = toRef(person, 'name')
      console.log(name)

      const person1 = toRefs(person)
      console.log(person1)

      return { 
        ...person1
        // name: toRef(person, 'name'),
        // age: toRef(person, 'age'),
        // salary: toRef(person, 'salary'),
        // type: toRef(person.type.state, 'number')
      }
    }
  }
</script>