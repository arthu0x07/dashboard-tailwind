import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        myFavoriteColor: '#626262',
      },
    },
  },
  plugins: [],
}
export default config
