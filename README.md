# 34 Roof — Sitio web del restaurante

Proyecto integrador para la materia **Taller de Desarrollo Web** (UCC).
Sitio web para un restaurante ubicado en el piso 34, con vista panorámica de Córdoba.

## Índice

- [Descripción](#descripción)
- [Autores](#autores)
- [Contenido de la página](#contenido-de-la-página)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Cómo ver el sitio](#cómo-ver-el-sitio)
- [Abrir el proyecto localmente](#abrir-el-proyecto-localmente)
- [Estado actual](#estado-actual)

## Descripción

Sitio web informativo para **34 Roof**, un restaurante con vista de 360° ubicado en Humberto
Primo 670, Córdoba. Permite a los usuarios conocer el lugar, ver el menú, calcular el total
aproximado de su pedido y reservar una mesa.

## Autores

- Benjamin Rojo Kerkebe
- Justo Solana Allende

## Contenido de la página

### Páginas del sitio

- **Inicio**: presentación del restaurante, imagen destacada y accesos rápidos.
- **Sobre nosotros**: historia y concepto del lugar.
- **Menú**: listado de platos por categoría, con buscador y carrito para calcular el total del pedido.
- **Reservas**: formulario para reservar mesa (nombre, teléfono, fecha, hora, cantidad de personas).
- **Contacto**: ubicación, mapa y redes sociales.

## Tecnologías utilizadas

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura de las páginas |
| CSS3 | Estilos de la primera entrega |
| JavaScript | Buscador, cálculo del carrito y validación de formularios |
| React | Componentes y Hooks de la segunda entrega |
| React Router DOM | Navegación entre páginas |
| Vite | Desarrollo y compilación del proyecto React |
| Sass (SCSS) | Estilos de la segunda entrega |
| json-server | API simulada de productos y reservas |
| Fetch API | Consultas y envío de datos a la API |
| localStorage | Guardado del carrito en el navegador |
| GitHub Pages | Publicación de la primera entrega |

## Estructura del proyecto

```
proyecto2026-RojoKerkebe-SolanaAllende/
├── README.md
├── primera-entrega/
│   ├── index.html
│   ├── menu.html
│   ├── reservas.html
│   ├── sobre-nosotros.html
│   ├── contacto.html
│   ├── style.css
│   ├── script.js
│   ├── imagenes/
│   ├── Sketch/
│   ├── Wireframe/
│   ├── Diagrama-Organizacion/
│   └── Requerimientos.md
└── segunda-entrega/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/
    └── src/
        ├── api/
        ├── assets/
        ├── components/
        ├── data/
        ├── layout/
        ├── pages/
        ├── styles/
        └── utils/
```

## Cómo ver el sitio

**Sitio publicado:** [Visitar 34 Roof](https://benjarojo10.github.io/proyecto2026-RojoKerkebe-SolanaAllende/primera-entrega/)

El sitio publicado corresponde a la **primera entrega**, realizada con HTML, CSS y JavaScript.
Para ejecutar la segunda entrega en React, seguí los pasos de la siguiente sección.

### Abrir el proyecto localmente

#### Segunda entrega (React)

**Requisitos:** Node.js 20.19 o posterior de la rama 20, o Node.js 22.12 o posterior, y npm.

1. Abrí una terminal en la carpeta raíz del repositorio e instalá las dependencias:

   ```bash
   cd segunda-entrega
   npm ci
   ```

2. En esa terminal, iniciá la API simulada:

   ```bash
   npm run api
   ```

   La API se ejecuta en `http://localhost:3001` y utiliza `src/data/db.json`.
   Podés comprobar los productos en `http://localhost:3001/productos`
   y las reservas en `http://localhost:3001/reservas`.

3. Dejá la API funcionando y abrí una **segunda terminal**, también ubicada en `segunda-entrega`:

   ```bash
   npm run dev
   ```

4. Abrí en el navegador la dirección que indique Vite, habitualmente `http://localhost:5173`.

Ambas terminales deben permanecer abiertas para que funcionen el menú y las reservas.
Para detener los servidores, presioná **Ctrl+C** en cada terminal.
Si aparece `EADDRINUSE` al iniciar la API, detené la instancia anterior que esté usando el puerto 3001.

#### Dependencias y vulnerabilidades

Al ejecutar `npm audit` en `segunda-entrega` el resultado es **0 vulnerabilidades**
(ninguna crítica, alta, moderada ni baja).

#### Compilación y previsualización

Desde `segunda-entrega`:

```bash
npm run build
npm run preview
```

La compilación se guarda en `dist`. Abrí la dirección indicada por la previsualización.
La API debe seguir funcionando para consultar el menú y guardar reservas.

#### Primera entrega (HTML, CSS y JavaScript)

Abrí [la página de inicio](primera-entrega/index.html) en tu navegador.

## Estado actual

- [x] Diagrama de organización
- [x] Sketch (versión desktop y mobile)
- [x] Wireframe (versión desktop y mobile, incluye buscador y carrito en Menú)
- [x] Maquetado HTML + CSS
- [x] Funcionalidad JavaScript
- [x] Deploy en GitHub Pages
- [x] Proyecto React con Vite, rutas con `react-router-dom` y `Outlet`
- [x] Estilos con Sass (SCSS)
- [x] API simulada con json-server (menú, categorías, horarios y reservas)
- [x] Carrito guardado en `localStorage`
- [x] Validaciones en tiempo real en el formulario de reservas
