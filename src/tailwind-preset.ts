/**
 * @rizoma/ui - Tailwind Preset
 * Tokens de diseño centralizados para todos los proyectos Rizoma
 *
 * @author Ulises González <ulises@rizo.ma>
 * @license MIT
 * @copyright 2025 Rizo.ma
 */

import type { Config } from 'tailwindcss';

/**
 * Paleta de colores oficial de Rizoma
 */
export const colors = {
  rizoma: {
    green: {
      DEFAULT: '#289448',
      light: '#34A856',
      dark: '#1F7038',
      muted: '#4CAF6A',
    },
    cyan: {
      DEFAULT: '#1FACC0',
      light: '#3FC5D6',
      dark: '#178A9A',
    },
    red: {
      DEFAULT: '#C32421',
      light: '#D94744',
      dark: '#9C1D1A',
    },
    blue: {
      DEFAULT: '#2b5672',
      accent: '#116dff',
      bright: '#2F5DFF',
    },
    neutral: {
      DEFAULT: '#505050',
      light: '#6A6A6A',
      dark: '#3A3A3A',
    },
  },
  'cloud-dancer': '#F0EDE5',
  gray: {
    50: '#F9FAFB',
    100: '#FEF6ED',
    200: '#D7D7D7',
    300: '#B0B0B0',
    400: '#767574',
    500: '#5F5F5F',
    600: '#525150',
    700: '#383838',
    800: '#2d2d2d',
    900: '#151414',
    950: '#080808',
  },
  success: '#289448',
  warning: '#FF8044',
  error: '#e03939',
  info: '#116dff',
} as const;

/**
 * Sistema tipográfico Rizoma 2026
 * (Sin `as const` para compatibilidad con tipos de Tailwind)
 */
export const fontFamily = {
  sans: [
    'Inter',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Helvetica',
    'Arial',
    '"Noto Sans SC"',
    'sans-serif',
  ],
  serif: [
    '"Source Serif 4"',
    'ui-serif',
    'Georgia',
    '"Times New Roman"',
    'Times',
    '"Noto Serif SC"',
    'serif',
  ],
  heading: [
    '"Source Serif 4"',
    'ui-serif',
    'Georgia',
    'serif',
  ],
  body: [
    'Inter',
    'system-ui',
    '-apple-system',
    'sans-serif',
  ],
};

/**
 * Espaciado personalizado
 */
export const spacing = {
  section: '5rem',
  'section-sm': '3rem',
} as const;

/**
 * Anchos máximos
 */
export const maxWidth = {
  container: '1280px',
  content: '720px',
} as const;

/**
 * Border radius
 */
export const borderRadius = {
  card: '0.75rem',
  button: '0.5rem',
} as const;

/**
 * Sombras
 */
export const boxShadow = {
  card: '0 4px 20px -4px rgba(0, 0, 0, 0.1)',
  'card-hover': '0 8px 30px -4px rgba(0, 0, 0, 0.15)',
  button: '0 2px 8px -2px rgba(40, 148, 72, 0.3)',
} as const;

/**
 * Animaciones
 */
export const animation = {
  'fade-in': 'fadeIn 0.5s ease-out',
  'slide-up': 'slideUp 0.5s ease-out',
} as const;

export const keyframes = {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
} as const;

/**
 * Preset de Tailwind para proyectos Rizoma
 *
 * @example
 * // tailwind.config.js
 * import rizomaPreset from '@rizoma/ui/tailwind-preset';
 *
 * export default {
 *   presets: [rizomaPreset],
 *   content: ['./src/** /*.{js,ts,jsx,tsx}'],
 * };
 */
const rizomaPreset: Partial<Config> = {
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      fontFamily,
      spacing,
      maxWidth,
      borderRadius,
      boxShadow,
      animation,
      keyframes,
    },
  },
};

export default rizomaPreset;
