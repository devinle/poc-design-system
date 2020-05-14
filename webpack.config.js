const glob = require('glob');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNesting = require('postcss-nesting');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

module.exports = {
    entry: glob.sync(
        './src/stories/**/*.css', 
        { 
            ignore: './src/stories/**/*.js' 
        }
    ).reduce(
        (acc, filePath) => {
            const entry = filePath.replace('./src/', '');
            acc[entry] = filePath;
            return acc;
        }, 
        {}
    ), 
    optimization: {
        minimize: true,
        minimizer: [ 
            new OptimizeCSSAssetsPlugin({})
        ],
    }, 
    output: {
        filename: '[name].tmp',
    },
	module: {
		rules: [
			{
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader', 
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                postcssNesting()
                            ]
                        },
                    }
                ]
			},
		],
	},
	plugins: [
        new CleanWebpackPlugin({
            verbose: true,
        }),
		new MiniCssExtractPlugin({
            filename: '[name]',
        }),
	],
};