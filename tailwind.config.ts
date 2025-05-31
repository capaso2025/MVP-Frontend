// tailwind.config.js
import { createConfig } from '@tailwindcss/vite';

export default createConfig({
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx}', // asegúrate de incluir las stories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
