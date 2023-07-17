/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'gray-01': '#F8FAFC',
        'gray-02': '#E2E8F0',
        'gray-03': '#94A3B8',
        'gray-04': '#334155',
        'gray-05': '#1E293B',
        'gray-06': '#0F172A',
        'gray-07': '#020617',
      },
      textColor: {
        'gray-01': '#F8FAFC',
        'gray-02': '#E2E8F0',
        'gray-03': '#94A3B8',
        'gray-04': '#334155',
        'gray-05': '#1E293B',
        'gray-06': '#0F172A',
        'gray-07': '#020617',
      },
      borderColor: {
        'gray-04': '#334155',
        'gray-05': '#1E293B',
      }
    },
  },
  plugins: [],
}
