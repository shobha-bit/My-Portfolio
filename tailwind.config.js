export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)', surface: 'rgb(var(--surface) / <alpha-value>)', ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)', line: 'rgb(var(--line) / <alpha-value>)', accent: 'rgb(var(--accent) / <alpha-value>)',
        accentink: 'rgb(var(--accent-ink) / <alpha-value>)', amber: 'rgb(var(--amber) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['Manrope', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
