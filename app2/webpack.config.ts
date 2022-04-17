const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'auto',
    uniqueName: 'app2',
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      library: { type: 'var', name: 'app2' },
      filename: 'remoteEntry.js',
      exposes: {
        AppModule: './src/app/app.module.ts',
      },
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
