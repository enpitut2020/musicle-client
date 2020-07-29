const path = require("path")
const HTMLPlugin = require("html-webpack-plugin")

module.exports = [
  {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader?name=[name].[ext]",
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
    plugins: [
      new HTMLPlugin({
        template: path.join(__dirname, "src/index.html"),
      }),
    ],
    devServer: {
      historyApiFallback: true,
    },
    output: {
      publicPath: "/",
    },
  },
]
