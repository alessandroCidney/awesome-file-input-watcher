const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const generalConfig = {
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist/browser')],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}

const browserConfig = {
  entry: './src/index.ts',
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist/browser'),
    filename: 'awesome-file-input-watcher.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    libraryExport: 'default',
    umdNamedDefine: true,
    library: 'AwesomeFileInputWatcher',
  },
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    generalConfig.devtool = 'cheap-module-source-map'
  } else if (argv.mode !== 'production') {
    throw new Error('Specify env')
  }

  Object.assign(browserConfig, generalConfig)

  return [browserConfig]
}
