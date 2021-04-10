const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        historyApiFallback: true
    }
};
