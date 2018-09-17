const path = require('path');

module.exports = {
    chainWebpack: function(config) {
        // copy static assets from /public to /wwwroot. this works with
        // normal builds, but fails when the --modern flag is applied.
        config.plugin('copy').tap(function() {
            return [
                [
                    { 
                        from: path.resolve(__dirname, './public'), 
                        to: path.resolve(__dirname, './wwwroot'),
                    },
                ],
            ];
        });
    },
};
