```javascript
// Ensure your tailwind.config.js includes the following
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// Or if using NextJS or other frameworks, follow their Tailwind configuration guidelines

// In your component:
<div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
  <h1>This is a gradient background</h1>
</div>
```