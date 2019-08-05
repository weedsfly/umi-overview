export default {
  plugins: [
    ['umi-plugin-react', {
        antd: true, //使用antd
        dva: false //不使用dva，我们直接用redux
    }]
  ],
  // 使用自定义的router，如果不使用则是用umi的约定式路由(按文件夹路径来)
  // 这里的path都是相对于pages文件，例如：
  //  routes:[{
  //   path:'/box', // 指定路由地址(url)
  //   component:'Box/index' //引用的组件路径
  // }]
  // 引用的就是pages文件夹下 Box/index.js文件
  routes: [{
    path: '/',
    component: 'index',
    routes: [{
      path: '/',
      component: './home',
    }, {
      path: '/center',
      component: './center',
    }]
  }],
  cssLoaderOptions: {
    localIdentName: '[local]'
  }
}