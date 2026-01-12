# @rizoma/ui

Sistema de diseño centralizado de Rizoma. Tokens, componentes y estilos compartidos para todos los proyectos.

## Instalación

```bash
# Configurar registry para @rizoma
npm config set @rizoma:registry https://npm.pkg.github.com

# Instalar el paquete
npm install @rizoma/ui
```

## Uso

### Tailwind Preset

El preset de Tailwind incluye todos los tokens de diseño de Rizoma (colores, tipografía, espaciado, etc.).

```js
// tailwind.config.js
import rizomaPreset from '@rizoma/ui/tailwind-preset';

export default {
  presets: [rizomaPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx,astro}',
    // Incluir componentes de @rizoma/ui
    './node_modules/@rizoma/ui/dist/**/*.{js,mjs}',
  ],
};
```

### CSS Variables

Importa las variables CSS para usarlas sin Tailwind:

```css
@import '@rizoma/ui/css/variables.css';
@import '@rizoma/ui/css/components.css';
```

### Componentes React

```tsx
import { Button, Card, Badge, Input } from '@rizoma/ui';

function App() {
  return (
    <Card interactive padding="md">
      <h2>Contacto</h2>
      <Input
        label="Email"
        type="email"
        placeholder="tu@email.com"
      />
      <Button variant="primary" size="md">
        Enviar
      </Button>
      <Badge variant="green">Nuevo</Badge>
    </Card>
  );
}
```

## Tokens de Diseño

### Colores

| Token | Valor | Uso |
|-------|-------|-----|
| `rizoma-green` | `#289448` | Color principal de marca |
| `rizoma-green-light` | `#34A856` | Hover states |
| `rizoma-green-dark` | `#1F7038` | Active states |
| `rizoma-cyan` | `#1FACC0` | Color secundario |
| `rizoma-red` | `#C32421` | Errores, alertas |
| `cloud-dancer` | `#F0EDE5` | Fondo principal |

### Tipografía

| Token | Fuente | Uso |
|-------|--------|-----|
| `font-sans` | Inter | UI, body text |
| `font-serif` | Source Serif 4 | Headings, editorial |
| `font-heading` | Source Serif 4 | Alias para headings |
| `font-body` | Inter | Alias para body |

### Espaciado

| Token | Valor | Uso |
|-------|-------|-----|
| `spacing-section` | `5rem` | Padding de secciones |
| `spacing-section-sm` | `3rem` | Padding de secciones pequeñas |

### Sombras

| Token | Uso |
|-------|-----|
| `shadow-card` | Sombra base para cards |
| `shadow-card-hover` | Sombra en hover |
| `shadow-button` | Sombra para botones primarios |

## Componentes

### Button

```tsx
<Button
  variant="primary" // primary | secondary | ghost
  size="md"         // sm | md | lg
  fullWidth={false}
  loading={false}
  leftIcon={<Icon />}
  rightIcon={<Icon />}
>
  Texto
</Button>
```

### Card

```tsx
<Card
  interactive={true}  // Hover effects
  padding="md"        // none | sm | md | lg
>
  <CardHeader>Título</CardHeader>
  <CardBody>Contenido</CardBody>
  <CardFooter>Acciones</CardFooter>
</Card>
```

### Badge

```tsx
<Badge
  variant="green"  // green | cyan | red | neutral
  size="md"        // sm | md
>
  Etiqueta
</Badge>
```

### Input

```tsx
<Input
  label="Campo"
  error="Mensaje de error"
  helperText="Texto de ayuda"
  leftIcon={<Icon />}
  rightIcon={<Icon />}
/>
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo con watch
npm run dev

# Build
npm run build

# Type check
npm run typecheck
```

## Publicación

El paquete se publica automáticamente a GitHub Packages cuando:

1. Se crea un release en GitHub
2. Se ejecuta manualmente el workflow "Publish Package"

## Integración en Proyectos

### rizo-web (Astro)

```js
// tailwind.config.js
import rizomaPreset from '@rizoma/ui/tailwind-preset';

export default {
  presets: [rizomaPreset],
  content: ['./src/**/*.{astro,tsx}'],
};
```

### edu-platform (Next.js)

```js
// tailwind.config.ts
import rizomaPreset from '@rizoma/ui/tailwind-preset';

export default {
  presets: [rizomaPreset],
  content: ['./app/**/*.tsx', './components/**/*.tsx'],
};
```

### lean-coffee (React)

```js
// tailwind.config.js
import rizomaPreset from '@rizoma/ui/tailwind-preset';

export default {
  presets: [rizomaPreset],
  content: ['./src/**/*.tsx'],
};
```

## Actualizaciones Automáticas

Para mantener los proyectos sincronizados, configura Dependabot o Renovate:

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: npm
    directory: /
    schedule:
      interval: daily
    groups:
      rizoma-ui:
        patterns:
          - "@rizoma/*"
```

## Licencia

MIT © 2025 [Ulises González](https://rizo.ma) - Rizo.ma
