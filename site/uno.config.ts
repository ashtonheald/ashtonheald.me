import {
  defineConfig,
  presetIcons,
  presetWebFonts,
  presetWind4,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      primary: {
        DEFAULT: 'var(--primary)',
        foreground: 'var(--primary-foreground)'
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        foreground: 'var(--secondary-foreground)'
      },
      muted: {
        DEFAULT: 'var(--muted)',
        foreground: 'var(--muted-foreground)'
      },
      accent: {
        DEFAULT: 'var(--accent)',
        foreground: 'var(--accent-foreground)'
      },
      border: 'var(--border)',
      input: 'var(--input)',
      ring: 'var(--ring)'
    }
  },
  presets: [
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom'
      }
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter',
        serif: 'Playfair Display',
        mono: 'Roboto Mono'
      }
    }),
    presetWind4({
      preflights: {
        reset: true
      }
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom'
      }
    })
  ],
  transformers: [transformerDirectives()]
})
