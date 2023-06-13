module.exports = {
  reactStrictMode: true,
};

const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/images',
            outputPath: 'static/images',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};
