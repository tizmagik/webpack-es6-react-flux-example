const webpack = require("webpack")

module.exports = {
	context: __dirname + "/client",
	entry: {
		app: "./app"
	},
	output: {
		path: __dirname + "/public",
		publicPath: "http://localhost:8080/assets/",
		filename: "[name].bundle.js",
		sourceMapFilename: "[file].map",
		chunkFilename: "[id].bundle.js"
	},
	devServer: {
		// https: true,
		watch: true,
		inline: true,
		contentBase: __dirname + "/public"
	},
	// devtool: "#cheap-module-eval-source-map",
	plugins: [
		// new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {stage: 0}
			},
			{
				test: /\.css$/,
				loaders: ["style", "css"]
			},
		]
	},
	externals: {
		// 'react': 'React'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
	// historyApiFallback: true
}