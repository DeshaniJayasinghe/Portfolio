import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // සාමාන්‍යයෙන් localhost එකේ වැඩ කරද්දී '/' ප්‍රමාණවත්. 
  // හැබැයි GitHub Pages වල දාද්දී '/Portfolio/' වගේ (repo name එක) වෙන්න ඕනේ.
  base: './', 
})
