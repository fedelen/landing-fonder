import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    // Le pasamos explícitamente la ruta a tu config
    tailwindcss({ config: './tailwind.config.mjs' }),
    autoprefixer(),
  ],
}
