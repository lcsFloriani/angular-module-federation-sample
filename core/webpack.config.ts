const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'auto',
    uniqueName: 'core',
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'core',
      library: { type: 'var', name: 'core' },
      shared: {
        '@angular/core': {
          eager: true,
          singleton: true,
          strictVersion: false,
          requiredVersion: 'auto',
        },
        '@angular/common': {
          eager: true,
          singleton: true,
          strictVersion: false,
          requiredVersion: 'auto',
        },
        '@angular/router': {
          eager: true,
          singleton: true,
          strictVersion: false,
          requiredVersion: 'auto',
        },
      },
    }),
  ],
};
