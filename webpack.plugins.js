let {ExtractCssPlugin,HtmlWebpackPlugin,SpritesmithPlugin}=require("./webpack.downPlugins");

module.exports =[
  // new CleanWebpackPlugin(['dist']),
    ExtractCssPlugin,
    // ExtractLessPlugin,
  new HtmlWebpackPlugin({

        // favicon: false, //给生成的 html 文件指定 favicon
        // chunks: 'all', //而如果没有指定 chunks 选项，默认会全部引用所有入口的js,指定加载的js文件
        // excludeChunks: [], //排除掉某些 js 文件
        // xhtml: false //一个布尔值，默认值是 false ，如果为 true ,则以兼容 xhtml 的模式引用文件。
        template:__dirname + "/dev/test/index.html",
        title: '', //模板页面未使用就用它
        filename: './index.html',//默认输出路径为output的路径，输出文件的文件名称，默认为index.html，不配置就是该文件名；此外，还可以为输出文件指定目录位置
        hash: true,
        cache: true, //默认值是 true。表示只有在内容变化时才生成一个新的文件 是否缓存
        showErrors: true,
        minify: {
            "removeAttributeQuotes": true,// 移除属性的引号
            "removeComments": true,
            "removeEmptyAttributes": true,
        },
        inject: true, //默认值，script标签位于html文件的 body 底部

    }),
    // new SpritesmithPlugin({
    //     //设置源icons,即icon的路径，必选项
    //     src: {
    //         cwd: path.resolve(__dirname, 'dev/test/img/'),
    //         glob: '*.png'
    //     },
    //     //设置导出的sprite图及对应的样式文件，必选项
    //     target: {
    //         image: path.resolve(__dirname, 'dist/images/sprite.png'),
    //         css: path.resolve(__dirname, 'dist/images/*.less') //也可以为css, sass文件，需要先安装相关loader
    //     },
    //     //设置sprite.png的引用格式
    //     apiOptions: {
    //         cssImageRef: './sprite.png' //cssImageRef为必选项
    //     },
    //     //配置spritesmith选项，非必选
    //     spritesmithOptions: {
    //         algorithm: 'top-down'//设置图标的排列方式
    //     }
    // })
]