
 <p align="center">
<h1 style="text-align: center;">Ego Challenge</h1>

## Demo
Puedes ver una versión actual del proyecto [aquí](https://ego-challenge-two.vercel.app/)

## Cómo instalarlo y correr el proyecto localmente en tres simples pasos
Detalles importantes a tener en cuenta:
- **Deberás tener instalado un editor de código, por ejemplo VSCode (https://code.visualstudio.com/)**
- **Deberás tener instalado Git (https://git-scm.com/)**
- **Deberás tener instalado Node.js (https://nodejs.org)**

### 1. Clonar el proyecto

```
$ git clone https://github.com/txakurhub/ego-challenge.git
```

### 2. Instalar dependencias (en el directorio raíz)

```
$ npm install
```
### 3. Levantar el proyecto

```
$ npm run dev
```
### Felicitaciones, ya estás corriendo el proyecto localmente.


<br/>

## Ficha Técnica
Esta ficha técnica describe los diferentes comportamientos y funcionalidades del proyecto realizado para Ego-Challenge. Proporciona una guía detallada sobre las acciones que los usuarios pueden realizar y cómo el sistema debe responder a esas acciones.

### 1. Descripción general
El proyecto Ego-Challenge es una aplicación web que permite a los usuarios ver y explorar sobre una colección de automóviles. Los usuarios pueden ver información detallada de cada automóvil, incluyendo su nombre, una descripción, año de fabricación, precio, una imagen representativa, features y highlights.

### 2. Casos de Uso
Caso de Uso 1: Búsqueda de Automóviles
El usuario puede filtrar automóviles por tipo de vehículo como autos, pickups y comerciales, y SUVs y crossovers.
El sistema debe mostrar los resultados de la búsqueda de manera dinámica a medida que el usuario ingresa los criterios de ordenamiento y filtros.

### Caso de Uso 2: Visualización de Detalles del Automóvil
El usuario puede hacer clic en un automóvil en la lista para ver información detallada.
El sistema debe mostrar una página de detalles con todos los atributos del automóvil, incluyendo la imagen de alta resolución.

### 3. Interacciones del Usuario
El usuario puede seleccionar filtros específicos, como segmento, precio o año, para refinar los resultados de búsqueda.
El usuario puede hacer clic en un automóvil en la lista para ver los detalles completos.
El usuario puede regresar a la página principal desde la página de detalles.

### 4. Respuestas del Sistema
Después de realizar una búsqueda, el sistema debe mostrar una lista de automóviles que coinciden con los criterios de búsqueda.
En la página de detalles, el sistema debe mostrar la información completa del automóvil, incluyendo la imagen de alta resolución.
El sistema debe proporcionar una interfaz de usuario intuitiva y receptiva para una experiencia de usuario fluida.


### 5. Escenarios de Error
Si no se encuentra ningún automóvil, el sistema muestra una tarjeta de carga para indicar visualmente que se está intentando cargar los datos.
