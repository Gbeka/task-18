const path = require('path')


module.exports = {
    mode: "development",
    entry: './js.js',



    module: {
        rules: [
        
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
          
        ]
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js.js'
      }
  }