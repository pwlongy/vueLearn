<template>
  <h1>其他组合式api</h1>
  <h2>姓名： {{ name }}</h2>
  <h2>年龄： {{ age }}</h2>
  <h2>薪水： {{ salary }}k</h2>
  <button @click="name+='!'">姓名</button>
  <button @click="age++">年龄</button>
  <button @click="salary++">薪水</button>

  <hr/>
  {{ number.y }}
  <button @click="number.y++">+1</button>

  <hr/>
  <h1>readonly与shallowReadonly</h1>
  <h3>汽车</h3>
  <h3>名字: {{ carName }}</h3>
  <h3>价格: {{ carPrice }}</h3>
  <h3>数量: {{ carType.a.b }}</h3>
  <button @click="carName+='!'">名字</button>
  <button @click="carPrice++">价格</button>
  <button @click="carType.a.b+=1">数量</button>
</template>

<script>
import { ref, reactive, shallowReactive, shallowRef, toRef, toRefs, readonly, shallowReadonly, toRaw, markRaw} from "vue";
  export default{
    setup() {
      // 只能浅层次的监听属性（只考虑第一层次的响应数据），例如需要修改type对象中的number属性，无法实现响应式功能
      const person = shallowReactive({
        name: '小明',
        age: 18,
        salary: 18,
        type: {
          state: {
            number: 1
          }
        }
      })
      // shallowRef不会去监听对象类型的  
      // shallowRef只处理基本数据类型的响应式，不进行对对象的响应式处理

      const number = shallowRef({
        y: 0
      })
      console.log(number)

  

      // 返回的是一个ref对象， 相当于一个桥接对象
      const name = toRef(person, 'name')
      console.log(name)

      const person1 = toRefs(person)
      console.log(person1)

      
      // shallowReactive 与 shallowRef什么时候使用
      // 如果有一个对象数据，结构比较深，但变化时只是外层属性变化 === 》 shallowReactive
      // 如果一个对象数据，后续功能不会修改该对象中的属性，而是生成新的对象来替换 ===》 shallowRef

      let car = reactive({
        carName: '凯迪拉克',
        carPrice: 19,
        carType: {
          a: {
            b: '999999'
          }
        }
      })

      // 将数据变为只能读不能改的属性
      let car1 = readonly(car)
      // shallowReadonly返回一个对象只是第一层数据只读,深层次的数据可以修改
      // let car2 = shallowReadonly(car)


      
      // 使用场景: 用于读取响应式对象对应的普通对象,对这个普通对象的所有操作,不会引起页面更新
      console.log(toRaw(car))
      // 当需要添加某个对象的时候,不需要让他进行响应式操作,可以通过标记成为普通对象  
      // 有些数据不应该设置为响应式数据,例如复杂的第三方类库等
      // 当渲染具有不可变数据源的列表时,跳过响应式转换可以提高性能
      console.log(markRaw(car))




      return { 
        ...person1,
        number,
        ...toRefs(car1),
        // ...toRefs(car2)
        // name: toRef(person, 'name'),
        // age: toRef(person, 'age'),
        // salary: toRef(person, 'salary'),
        // type: toRef(person.type.state, 'number')
      }
    }
  }
</script>