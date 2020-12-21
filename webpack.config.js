const discountCodeExample = require('./modules/discount-code/webpack.config');

module.exports = function(env, argv) {
    return [
        discountCodeExample(env, argv),
      
    ];
};
