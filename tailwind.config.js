module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include this for React files
  ],
  theme: {
    extend: {
      // Animations
      animation: {
        ticker: 'ticker 25s linear infinite', // Adjust speed of ticker
        fadeIn: 'fadeIn 1s ease-in', // Fade in effect
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(20%)' },  // Start from the middle (50%)
          '100%': { transform: 'translateX(-100%)' }, // End on the left (-100%)
        },
        fadeIn: {
          '0%': { opacity: 0 },  // Fade from invisible
          '100%': { opacity: 1 },  // Fade to fully visible
        },
      },
      // Add colors customization
      colors: {
        red: {
          500: '#F56565',  // Red color for text
        },
        yellow: {
          100: '#ECC94B',  // Yellow color for shadow
        },
      },
      // Custom text-shadow class
      textShadow: {
        yellow: '2px 2px 5px rgba(255, 255, 0, 1)', // Create yellow text shadow
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // Ensure tailwindcss-textshadow plugin is loaded
  ],
};
