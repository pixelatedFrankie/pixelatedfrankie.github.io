/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.js',
    './src/components/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SomeType Mono', 'monospace']
      },
    },
  },
  // Add a custom extractor to look for 'className' in JSX files
  extract: {
    // This is a regular expression pattern to match 'className' in JSX
    className: /className="([^"]*)/g,
  },
}

