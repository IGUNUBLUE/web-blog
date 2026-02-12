# Web Blog

Sitio web de presentación personal con blog. Portfolio y artículos construidos con [Astro](https://astro.build), React, MDX y Tailwind CSS.

## Stack

- **[Astro 5](https://astro.build)** — Sitio estático y contenido
- **React** — Componentes interactivos (Hero, UI)
- **MDX** — Entradas de blog con Markdown + JSX
- **Tailwind CSS v4** — Estilos y diseño
- **Framer Motion** — Animaciones
- **Radix UI** — Componentes accesibles (Avatar, Badge, Button, Card, Sheet, etc.)

## Requisitos

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) (recomendado) o npm/yarn

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/IGUNUBLUE/web-blog.git
cd web-blog

# Instalar dependencias
pnpm install
```

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `pnpm dev`     | Servidor de desarrollo   |
| `pnpm build`   | Build de producción      |
| `pnpm preview` | Vista previa del build   |

## Estructura del proyecto

```
src/
├── components/     # Componentes React y Astro
│   ├── ui/         # Componentes UI (shadcn-style)
│   ├── Hero.tsx
│   └── Welcome.astro
├── content/
│   └── blog/       # Entradas del blog (.md)
├── layouts/        # Layouts Astro
├── lib/            # Utilidades
├── pages/          # Rutas (/, /blog, /blog/[...slug])
└── styles/         # CSS global
```

## Añadir una entrada al blog

Crea un archivo `.md` en `src/content/blog/` con frontmatter:

```yaml
---
title: Título del post
description: Breve descripción
date: 2025-01-15
author: Lenin AGC
tags: [astro, react, tailwind]
---
```

El contenido en Markdown (y opcionalmente MDX) va debajo del frontmatter.

## Licencia

[Apache-2.0](LICENSE)
