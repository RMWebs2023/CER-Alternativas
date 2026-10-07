# Rediseño de ceralternativas.com — maqueta

Maqueta estática del rediseño propuesto (octubre 2026). **Todavía no está en producción**: queda en esta rama
hasta que el cliente la apruebe. Para verla, abrir `rediseno/index.html` con doble clic; no necesita build.

## Qué se mantuvo

- **Textos:** son los mismos del sitio actual. Las ofertas salen de `datos.js`, que es una copia exacta de
  `src/database/database.js`. La única diferencia es que tres títulos pasaron de MAYÚSCULAS a minúscula
  normal: "Tu experiencia…", "Etapas del programa" y "¡Comienza la experiencia!".
- **Comportamiento:** el buscador por trabajo y ubicación, el detalle de cada oferta, y el formulario
  Aplicar, que abre el mail con el mismo mensaje. Por decisión de Walter (07/10/2026), las postulaciones ya
  no van a `ceralternativas@gmail.com` sino a `rr.hh@ceralternativas.com`.
- **Enlaces:** WhatsApp, el PDF de búsquedas activas, el mail de RR.HH. del footer y la dirección.

## Diseño elegido

| | |
|---|---|
| Tipografías | DM Serif Display (títulos) y Schibsted Grotesk (texto), ambas de Google Fonts |
| Fondo / texto | crema `#F7F3EE` / tinta `#1E1726` |
| Marca | violeta `#5B2C82`, violeta profundo `#2B1240` (bloques oscuros y footer) |
| Acento | azafrán `#E8A33D` (etiqueta "Nuevo" y botón "Aplica ahora") |
| Modo oscuro | fondo `#141019`, violeta claro `#C39BEA`; botón en la cabecera, se recuerda la elección |
| Íconos | Lucide |
| Bordes | radios de 4, 8 y 14 px; contenido de hasta 1240 px |

Todos los valores están como variables en `css/estilos.css` (`:root` y `[data-theme="dark"]`).

## Estructura de la página

1. **Cabecera:** fija; se oculta al bajar y vuelve al subir. En celular se usa un menú a pantalla completa.
2. **Portada:** título grande, buscador, accesos rápidos por destino, dos fotos y un sello giratorio.
3. **Programas:** tres tarjetas con foto, desfasadas en altura.
4. **Cinta de fotos:** se desplaza sola.
5. **Últimas ofertas:** lista con filtros activos, "Ver más" y "Aplicar".
6. **Proceso:** requisitos y una línea de 12 etapas que se llena al hacer scroll.
7. **Bloque final:** "¡Comienza la experiencia!".
8. **¿Quiénes somos?:** antes era un modal; ahora es una sección de la página.
9. **Footer.**

**Animaciones:** entrada del título y apariciones al hacer scroll. Todas se desactivan si el sistema pide
movimiento reducido.

## Fotos

Reemplazan a las imágenes generadas con IA del sitio actual. Son fotos de Unsplash, de uso libre; las fuentes
están en `CREDITOS-FOTOS.txt`. Las fotos del equipo y el logo son las del sitio actual.

## Para llevarlo a producción

Hay que portar la maqueta a los componentes React del sitio (`src/components/nav.jsx`, `cards.jsx`, `footer.jsx` y `src/pages/home.jsx`):

- Reemplazar Bootstrap por `css/estilos.css`.
- Pasar la lógica de `js/main.js` a los componentes.
- Copiar `img/` a `src/assets/` o a `public/`.

Después se publica como siempre: `npm run build` y subir por FTP.
