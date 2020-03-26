function config() {
  return {
    presets: ['@babel/preset-typescript'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  };
}

module.exports = config;