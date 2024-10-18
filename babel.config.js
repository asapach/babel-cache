module.exports = function(api) {
    api.cache(true);
    return {
        presets: [
            ['@babel/preset-env', { browserslistEnv: 'production', debug: true }]
        ]
    };
};