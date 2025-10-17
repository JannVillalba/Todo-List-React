# Despliegue a GitHub Pages

Instrucciones para desplegar este proyecto Vite en GitHub Pages.

PRECONDICIONES
- El repositorio debe estar en GitHub y el remote `origin` debe apuntar a `https://github.com/TU_USUARIO/Todo-List-React.git` (reemplaza `TU_USUARIO`).
- Cambia `Todo-List-React` por el nombre real si tu repo usa otro.

Pasos:

1) Instala dependencias (si no lo hiciste):

```bash
npm install
```

2) Asegúrate de tener `gh` o haber creado el repo en GitHub y haber hecho push del código. Si no tienes remote, crea el repo con:

```bash
# crea un repo público y push del contenido actual
gh repo create TU_USUARIO/Todo-List-React --public --source=. --remote=origin --push
```

3) Construye y despliega (ya añadimos los scripts):

```bash
# instalar gh-pages localmente
npm install --save-dev gh-pages

# construye y publica en la rama gh-pages
npm run deploy
```

4) Espera unos segundos y abre:

```bash
$BROWSER https://TU_USUARIO.github.io/Todo-List-React
```

Alternativa: usar la carpeta `docs` en la rama principal
- Ejecuta `npm run build` y mueve `dist` a `docs/`, commit y push a `main`. Luego activa Pages en GitHub: Settings -> Pages -> main branch /docs folder.

Notas:
- Si el nombre de repo no es `Todo-List-React`, actualiza `base` en `vite.config.js` y la URL en `DEPLOY.md`.
- Si ya tienes `gh-pages` instalada globalmente, no hace falta `--save-dev`, pero lo recomendamos para reproducibilidad.
