module.exports =[
    {
        test: /(\.jsx|\.js)$/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "env"
                ]
            }
        },
        include:/test/
        // exclude: /node_modules|dist/
    },
    // {
    //     test: /\.css$/,
    //     use: [ 'style-loader', 'css-loader' ],
    //     include:/test/
    //     // exclude: /node_modules|dist/
    // },
    {
        test: /(\.css|\.less)$/,
        use:['style-loader', 'css-loader', 'less-loader'],
        include:/test/
    }
]