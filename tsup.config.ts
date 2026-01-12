import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'tailwind-preset': 'src/tailwind-preset.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'tailwindcss'],
  esbuildOptions(options) {
    options.banner = {
      js: '/**\n * @rizoma/ui\n * Sistema de diseño centralizado de Rizoma\n * @license MIT\n * @copyright 2025 Rizo.ma\n */\n',
    };
  },
  onSuccess: async () => {
    // Copiar archivos CSS al directorio dist
    const fs = await import('fs/promises');
    const path = await import('path');

    const cssDir = path.join('dist', 'css');
    await fs.mkdir(cssDir, { recursive: true });

    await fs.copyFile('src/css/variables.css', path.join(cssDir, 'variables.css'));
    await fs.copyFile('src/css/components.css', path.join(cssDir, 'components.css'));

    console.log('✓ CSS files copied to dist/css/');
  },
});
