const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
    ...styleguide,
    plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
    tabWidth: 4,
    printWidth: 120
};