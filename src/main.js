import Vue from 'vue' 
import VueRouter from 'vue-router' 
import App from './App.vue'
import { routes } from './routes'

// import Home from './components/Home.vue'
// import Menu from './components/Menu.vue'
// import Admin from './components/Admin.vue'
// import About from './components/about/About.vue'
// import Login from './components/Login.vue'
// import Register from './components/Register.vue'

// //二级路由
// import Contact from './components/about/Contact'
// import Delivery from './components/about/Delivery'
// import History from './components/about/History'
// import OrderingGuide from './components/about/OrderingGuide'

// //三级路由
// import Phone from './components/about/contact/Phone'
// import PersonName from './components/about/contact/PersonName'



Vue.use(VueRouter)

//数组--对象--属性path
// const routes = [
//   {path:'/',name:'homeLink',component:Home},
//   {path:'/menu',name:'menuLink',component:Menu},
//   {path:'/admin',name:'adminLink',component:Admin
//   //,beforeEnter:(to,from,next) =>{
//     //路由独享守卫

//     // alert("非登录状态，不能访问此页面");
//     // next(false);

//     //判断store.getters.isLogin ===false 
//     // if(to.path == '/login' || to.path == '/register'){
//     //   next();
//     // }else{
//     //   alert("还没有登录，请先登录！");
//     //   next('/login');
//     // }
//   //}
//   },
//   {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,children:[
//     {path:'/about/contact',name:'contactLink',redirect:'/personname',component:Contact,children:[
//       {path:'/phone',name:'phoneNumber',component:Phone},
//       {path:'/personname',name:'personName',component:PersonName},
//     ]},
//     {path:'/delivery',name:'deliveryLink',component:Delivery},
//     {path:'/history',name:'historyLink',component:History},
//     {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
//   ]},
//   {path:'/login',name:'loginLink',component:Login},
//   {path:'/register',name:'registerLink',component:Register},
//   //匹配默认路径
//   {path:'*',redirect:'/'}
// ]
//实例化
const router = new VueRouter({
  routes,
  //不配置mode会加“#”
  mode:'history',
  scrollBehavior(to,from,savePosition){
    // return {x:0,y:100}
    // return { selector:'.btn'}
    //只有在浏览器中触发了前进或后退按钮时才生效
    if(savePosition){
      return savePosition
    }else{
      return {x:0,y:0}
    }
  }
})
//全局守卫
// router.beforeEach((to,from,next) =>{
//   // alert("还没有登录，请先登录！");
//   // next();

//   console.log(to);
  
//   //判断store.getters.isLogin ===false 
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert("还没有登录，请先登录！");
//     next('/login');
//   }
// })

//后置钩子
// router.afterEach((to,from) =>{
//   alert('after each');
// })

//


new Vue({
  el:'#app',
  router,
  render:h => h(App)
})