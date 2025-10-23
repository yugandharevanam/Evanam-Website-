
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#374151", // Dark Gray
        SecondaryColor: "#F9FAFB", // Very Light Gray
        AccentColor: "#6B7280", // Medium Gray
        DarkGray: "#1F2937", // Darker Gray
        LightGray: "#F3F4F6", // Very Light Gray
        TextGray: "#6B7280", // Text Gray
        SuccessGreen: "#059669", // Success Green
        OrangeAccent: "#F59E0B", // Orange Accent
        RedAccent: "#DC2626", // Red Accent
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
