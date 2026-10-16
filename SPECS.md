# Wanderlust Explorer: especificaciones

## Objetivo y alcance

Crear una aplicación interactiva con React y Next.js para explorar experiencias, consultar su detalle y gestionar favoritos. Los datos se obtienen de un fichero TypeScript local y los favoritos se mantienen en memoria, sin persistencia.

## Páginas requeridas

| Ruta | Página | Requisitos |
| --- | --- | --- |
| `/` | Home | Sección hero con un botón que navega a `/experiences`. |
| `/experiences` | Explorador | Listado completo de tarjetas de experiencias, barra de búsqueda y al menos dos filtros: categoría y destino. La búsqueda y los filtros activos se reflejan en la URL mediante query parameters y prerrellenan los controles al cargar la página. |
| `/experiences/[id]` | Detalle | Información completa de una experiencia, obtenida del dataset local mediante su ID. |
| `/favorites` | Favoritos | Lista de experiencias que el usuario ha marcado como favoritas, guardadas en estado de componente. |
| `/profile` | Perfil | Perfil estático de un usuario simulado y un resumen con el número de favoritos guardados. |

## Dataset local

Generar con ayuda de un asistente de código con IA un array de 100 objetos de experiencia y guardarlo en un fichero TypeScript local.

Cada experiencia debe contener, como mínimo, los siguientes campos:

| Campo | Tipo | Contenido |
| --- | --- | --- |
| `id` | `string` o `number` | Identificador único para consultar la experiencia y gestionar sus favoritos. |
| `title` | `string` | Título de la experiencia. |
| `description` | `string` | Descripción de la experiencia. |
| `category` | `string` | Uno de estos valores: `Adventure`, `Culture`, `Food`, `Wellness`, `Nature`. |
| `destination` | `string` | Ciudad y país. |
| `price` | `number` | Precio de la experiencia. |
| `rating` | `number` | Valoración de la experiencia. |
| `imageUrl` | `string` | URL de una imagen; se permite cualquier placeholder. |

El explorador, el detalle y la lista de favoritos utilizan este mismo dataset.

## Búsqueda y filtros

### Búsqueda por título

- Filtrar las experiencias cuyo `title` coincida con el término buscado.
- Utilizar una expresión regular que no distinga entre mayúsculas y minúsculas, como `/term/i`.
- Si no hay un término de búsqueda, no restringir los resultados por título.

### Categoría y destino

- Ofrecer, como mínimo, un filtro por `category` y otro por `destination`.
- Cada filtro debe funcionar de manera independiente, aunque no haya búsqueda ni otro filtro activo.
- Combinar los filtros activos con la búsqueda: una experiencia debe cumplir todas las condiciones activas para aparecer en los resultados.
- Sin búsqueda ni filtros activos, mostrar las 100 experiencias.

### Sincronización con la URL

- Reflejar el término de búsqueda y los filtros activos en los query parameters de `/experiences`.
- Al cargar una URL con parámetros, prerrellenar la barra de búsqueda y los controles de categoría y destino con sus valores.
- Aplicar esos valores al listado desde la carga de la página, de modo que los controles y los resultados correspondan al estado de la URL.

## Favoritos y estado compartido

- Incluir un icono de corazón en cada tarjeta de experiencia.
- Al pulsarlo, añadir la experiencia a favoritos si no estaba guardada, o quitarla si ya lo estaba.
- Guardar los favoritos en un `useState` de nivel superior.
- Pasar el estado y las funciones necesarias hacia abajo mediante props.
- Compartir ese estado entre las tarjetas, la página `/favorites` y el contador de `/profile`.
- Actualizar la lista de favoritos y el contador cuando se añada o elimine una experiencia.
- No se requiere persistencia: los favoritos pueden perderse al recargar la aplicación.

## Criterios de aceptación

- [ ] La Home incluye un hero y un botón que lleva a `/experiences`.
- [ ] El dataset es un array local en TypeScript con 100 experiencias y todos los campos requeridos.
- [ ] Las categorías del dataset pertenecen al conjunto permitido y cada destino contiene ciudad y país.
- [ ] El explorador muestra todas las experiencias cuando no hay condiciones activas.
- [ ] La búsqueda filtra por título mediante una regex case-insensitive.
- [ ] Los filtros de categoría y destino funcionan por separado y combinados con la búsqueda.
- [ ] La URL refleja la búsqueda y los filtros activos mediante query parameters.
- [ ] Cargar una URL con parámetros prerrellena los controles y muestra los resultados correspondientes.
- [ ] El detalle muestra la información completa de la experiencia identificada por el ID de la ruta.
- [ ] El corazón de cada tarjeta permite añadir y quitar favoritos sin duplicarlos.
- [ ] `/favorites` muestra las experiencias marcadas como favoritas.
- [ ] `/profile` muestra un usuario simulado y el número actualizado de favoritos.
- [ ] Los favoritos se gestionan mediante un `useState` superior y props, sin persistencia.