const nodeExternals = require('webpack-node-externals');

module.exports = {
  // optimization: { minimize: false },
  externals: [
    nodeExternals()
  ]
};
