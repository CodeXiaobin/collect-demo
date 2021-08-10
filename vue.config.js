module.exports = {
    devServer: {
        proxy: {
            // 代理规则
            '/api': { // 配置的url请求名字开头
                target: 'https://api.megvii.com/',

                //target: 'http://10.18.110.107/api'  
                // https请求需要该设置
                secure: false,
                // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，

                // 必须设置该项
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "" //这里理解成用 “/api”代替target里面的地址，后面组件中我们调接口是直接用api代替
                    //比如我要调用 ‘http：、、40.00.100.100:1001:3000/user/info’  直接写成 ‘/api/user/info’}
                }
            }
        }
    }

}