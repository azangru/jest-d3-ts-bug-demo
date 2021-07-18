module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      '@babel/typescript',
      [
        '@babel/preset-env', {
          targets: {
            esmodules: true,
            // node: 'current'
          }
        }
      ]
    ]
  };

} 
