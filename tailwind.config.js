module.exports = {
  content: [
    './*.html',
    './*.md',
    './_layouts/**/*.html',
    './_posts/**/*.md',
    './_posters/**/*.md',
    './posters/**/*.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tertiary: '#c6c7c3',
        'on-error': '#690005',
        outline: '#8e9196',
        background: '#061423',
        'on-background': '#d6e4f9',
        surface: '#061423',
        'tertiary-fixed-dim': '#c6c7c3',
        'primary-fixed-dim': '#00daf3',
        'on-tertiary-container': '#818380',
        'on-error-container': '#ffdad6',
        'tertiary-fixed': '#e2e3df',
        'on-tertiary-fixed-variant': '#454745',
        'surface-container': '#132030',
        'on-secondary-fixed': '#101b30',
        'error-container': '#93000a',
        'on-primary-fixed-variant': '#004f58',
        'surface-dim': '#061423',
        'inverse-surface': '#d6e4f9',
        'on-surface-variant': '#c4c6cc',
        'surface-bright': '#2d3a4a',
        'on-primary': '#00363d',
        'primary-container': '#001e22',
        'outline-variant': '#44474c',
        'secondary-fixed': '#d7e2ff',
        primary: '#00daf3',
        'surface-container-low': '#0f1c2c',
        'on-tertiary-fixed': '#1a1c1a',
        'on-secondary-container': '#adb8d3',
        'tertiary-container': '#181b19',
        'surface-variant': '#283646',
        'on-surface': '#d6e4f9',
        'inverse-primary': '#006875',
        'surface-container-highest': '#283646',
        'surface-container-high': '#1e2b3b',
        secondary: '#bbc6e2',
        'on-primary-container': '#0090a1',
        error: '#ffb4ab',
        'inverse-on-surface': '#243141',
        'secondary-container': '#3e4960',
        'on-secondary-fixed-variant': '#3c475d',
        'secondary-fixed-dim': '#bbc6e2',
        'primary-fixed': '#9cf0ff',
        'on-secondary': '#263046',
        'on-tertiary': '#2f312e',
        'on-primary-fixed': '#001f24',
        'surface-container-lowest': '#020f1e',
        'surface-tint': '#00daf3',
        'poster-primary': '#b32428',
        'poster-primary-hover': '#8a1c1f'
      },
      fontFamily: {
        headline: ['Space Grotesk'],
        body: ['Inter'],
        label: ['Inter']
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.5rem',
        xl: '0.5rem',
        full: '0.75rem'
      }
    }
  }
};
