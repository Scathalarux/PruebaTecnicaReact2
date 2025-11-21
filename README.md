# Prueba técnica React - Midudev

Proyecto de React realizado para la consecución de pasos indicada en una prueba técnica aportada en el canal de Midudev ([vídeo](https://www.youtube.com/watch?v=XYpadB4VadY&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=3)).

## Pasos a realizar para la configuración base

1. Creación del proyecto e instalación de dependencias

- `npm create vite@latest (Framework: Vanilla, Variant: JS)`
- `npm install @vitejs/plugin-react -E`
- `npm install react react-dom -E`

2. Configuración de _vite.config.js_

```
    import {defineConfig} from 'vite';
    import react from '@vitejs/plugin-react';;

    export default defineConfig({
        plugins: [react()]
    });
```

3. Configuración de _main.js_

```
    import {createRoot} from 'react-dom/client'

    const root = createRoot(document.getElementById('app'));

    root.render(<h1>Hola mundo</h1>);
```

4. Activación de _JSX_

- Cambio en el nombre de _main.js_ por _main.jsx_
- Cambio en el punto de entrada de _index.html_
  > <script type="module" src="/src/main.jsx"></script>

5. Asegurarnos de que tenemos los datos mínimos en _package.json_

```
    {
      "name": "prueba-tecnica",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint .",
        "preview": "vite preview"
      },
      "dependencies": {
        "@vitejs/plugin-react": "5.1.1",
        "react": "19.2.0",
        "react-dom": "19.2.0"
      }
    }
```

---

⚠️ **_No olvidar_** 👀

- Mucha atención a la ubicación en la que estamos
- Recomendable hacer uso de ESLint

---

## Datos de la prueba técnica

#### Prueba técnica para Juniors y Trainees de React en Live Coding

1. APIs:

- https://www.omdbapi.com/
- API_KEY: 4287ad07

2. Enunciado

   > Creación de una aplicación para buscar películas

3. Requerimientos

- Mostrar un input para buscar la película y un botón para buscar
- Listar las películas encontradas y mostrar el título, año y póster
- Las películas deben mostrarse en un grid responsive

4. Primera iteración

- Evitar que se haga la misma búsqueda 2 veces seguidas
- Hacer que la búsqueda sea automática al escribir
- Evitar que se haga la búsqueda continuamente al escribir (debounce)
