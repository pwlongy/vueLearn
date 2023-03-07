// 引入的不再是vue钩爪函数，引入的是一个createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象----app (类似于之前vue2中的vm， 但app比vm更轻)
createApp(App).mount('#app')

// const app = createApp(App)
// app.mount('#app')

// const vm = new Vue({
//   render: h => h(App)
// }) 
// vm.$mount('#app')