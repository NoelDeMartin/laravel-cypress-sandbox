module.exports = (on, config) => {
    require('cypress-laravel/plugins')(on, config);

    return config;
};
