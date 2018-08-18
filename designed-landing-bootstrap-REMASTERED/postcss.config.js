module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
        preset: 'default',
    }),
        require('postcss-uncss')({
            html:'index.html',
            ignore: [
                /\.affix/,
                /\.alert/,
                /\.close/,
                /\.collaps/,
                /\.fade/,
                /\.has/,
                /\.help/,
                /\.in/,
                /\.modal/,
                /\.open/,
                /\.popover/,
                /\.tooltip/,
                /\.col/
            ]
       })
    ]
}