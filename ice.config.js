/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-09-30 10:56:51
 * @LastEditTime: 2019-10-07 14:22:10
 */
const path = require('path');

module.exports = {
  entry: 'src/index.jsx',
  publicPath: './',
  plugins: [
    [
      'ice-plugin-fusion',
      {
        themePackage: '@icedesign/theme'
      }
    ],
    [
      'ice-plugin-moment-locales',
      {
        locales: ['zh-cn']
      }
    ]
  ],
  alias: {
    '@': path.resolve(__dirname, './src/')
  },
  chainWebpack: config => {
    // console.log('chainWebpack', config);
    // console.log('chainWebpack-devServer', config.devServer);
  }
  //开发
  // devServer: {
  //   clientLogLevel: 'warning',
  //   disableHostCheck: true,
  // historyApiFallback: {
  //   rewrites: [
  //     {
  //       from: /.*/,
  //       to: path.posix.join(publicPath, 'index.html')
  //     }
  //   ]
  // },
  // hot: true,
  // open: true,
  // port: 8082,
  // overlay: {
  //   warnings: true,
  //   errors: false
  // },
  //可以做一些数据模拟之类的操作
  // before: app => {
  //   //此处开始本地数据模拟
  //   console.log('=====================before');
  //   // new SelfMock({
  //   //   app: app
  //   // });
  // }
  // }
};
