require('ignore-styles');
require('@babel/polyfill');
require('@babel/register')({
  presets: ['@babel/preset-env','@babel/preset-react']
});

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif'],
  name: '/assets/[name].[ext]',
});

require('./server');