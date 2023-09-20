const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          400: '#A67F59',
          500: '#8E7350',
          600: '#735C40',
        },
        olive: '#808000',
        moss: '#556B2F',
        terracotta: '#E2725B',
        sand: '#F4A460',
        forest: '#228B22',
        'dark-brown': '#8B4513',
        rust: '#B7410E',
        'dark-olive': '#556B2F',
        terracotta: '#E2725B',
      },
    },
  },
  plugins: [],
};
