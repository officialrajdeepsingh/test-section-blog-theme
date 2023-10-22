import type { Config } from 'tailwindcss'
// './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
