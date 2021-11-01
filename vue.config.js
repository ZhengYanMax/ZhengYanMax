module.exports = {
    devServer: {//配置服务 object
      proxy: {//代理请求
        '/boo': {
          target: 'http://localhost:2525',//目标（真实）地址  xxx/api/相对路径
          ws: true,//允许跨域 https 
          changeOrigin: true,//实现跨域
          pathRewrite:{//路径重写   xxx/相对路径
              '^/boo':''
          }
        },
        '/foo': {
          target: 'https://3g.163.com',//目标（真实）地址  xxx/api/相对路径
          ws: true,//允许跨域 https 
          changeOrigin: true,//实现跨域
          pathRewrite:{//路径重写   xxx/相对路径
              '^/foo':''
          }
        },
        '/pai':{
          target:'http://iwenwiki.com',
          changeOrigin: true,//允许跨域
          pathRewrite:{
            "^/pai":''
          }
        },
        '/zoo':{
          target:'https://www.qyer.com',
          changeOrigin: true,//允许跨域
          pathRewrite:{
            "^/zoo":''
          }
        },
      }
    }
  }