import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 品牌色：紫宸阁 / PurpleStar
        // 紫微星主题：深紫 + 鎏金
        imperial: {
          purple: '#2D1B4E',      // 主色 — 紫微紫
          'purple-deep': '#1A0F33',
          'purple-soft': '#4A2E6F',
          gold: '#D4AF37',         // 辅色 — 帝王金
          'gold-soft': '#E8C870',
          ink: '#0F0820',          // 背景
          parchment: '#F5EFE0',    // 古卷米色
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'starfield': "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(45,27,78,0.6) 0%, transparent 40%)",
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E8C870 50%, #D4AF37 100%)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
