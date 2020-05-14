module.exports = {
  stories: ['../src/Intro.stories.mdx', '../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    {
        name: '@storybook/addon-docs',
        options: {
          configureJSX: true,
        },
    },
  ],
  webpackFinal: ( config, { configType } ) => {
    config.module.rules.push(          
        { 
            test: /\.css$/,
            loader: 'postcss-loader', 
            options: {
                ident: 'postcss',
                plugins: () => [
                    postcssNesting()
                ]
            },
        },
    );

    return config;
  },
};
