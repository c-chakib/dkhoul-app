/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C2410C',
        primaryLight: '#EA580C',
        secondary: '#0F172A',
        accent: '#FFF7ED',
        success: '#10B981',
        white: '#FFFFFF',
        gray: '#F8FAFC',
        surface: '#FFFFFF',
        chart: ['#C2410C', '#EA580C', '#F97316', '#FB923C', '#FDBA74']
      },
      boxShadow: {
        primary: '0 4px 14px 0 rgba(194, 65, 12, 0.39)',
        card: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        float: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        glow: '0 0 20px rgba(194, 65, 12, 0.15)'
      },
      borderRadius: {
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem'
      },
      backgroundImage: {
        'moroccan-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C2410C' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'zellige': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C2410C' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0h20L20 40H0zM40 40V20L20 40h20z'/%3E%3C/g%3E%3C/svg%3E\")"
      },
      fontFamily: {
        'moroccan': ['serif', 'Georgia', 'Times New Roman']
      }
    },
  },
  plugins: [],
}