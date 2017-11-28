var webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/build',
    publicPath: 'dist/',
    filename: "bundle.js"
  },
  module: {
    //loaders加载器
    loaders: [
      {
        test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
        loader: 'babel-loader'//loader的名称（必须）
      }
    ]
    /*rules:[
      {
        test:/(\.jsx|\.js)$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:[
              'es2015','react'
            ]
          }
        },
        exclude:'/node_modules/'
      }
      /!*{
        test: /\.css$/,
        use: {
          loader: 'style-loader!css-loader?sourceMap'
        }
      }*!/
    ]*/
  },
  plugins: [
    /*new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })*/
    /*new webpack.HotModuleReplacementPlugin(),//热模块替换插件
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()*/
  ]
  /*devServer: {
    contentBase: '/build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
    historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    inline: true,//设置为true，当源文件改变时会自动刷新页面
    port: 8080//设置默认监听端口，如果省略，默认为"8080"
  }*/
};

/*if (process.env.NODE_ENV !== 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}*/
