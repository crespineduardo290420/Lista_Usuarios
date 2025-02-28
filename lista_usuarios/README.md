# Prueba Técnica de React.

A continuación, se muestra una app para mostrar una lista de usuarios y sus publicaciones, obtenidas mediante una API.


## Como correr el Proyecto.
1. Puedes clonar el repositorio, o descargar el código en archivo zip.
2. Descomprime el archivo zip.
3. Desplaza la carpeta y pégalo en un editor de código de tu preferencia.
4. Accede a la capeta usando el comando cd lista_usuarios.
5. Usar el comando "npm install" para obtener las dependencias.
6. Instalar react-router-dom, usando el comando "npm install react-router-dom"
7. Instalar Tailwind CSS, usando el comando "npm install -D tailwindcss@3", puedes ver los demás códigos de instalación usando este enlace https://v3.tailwindcss.com/docs/installation 
8. Después ejecutar el comando "npm run dev", para visualizar la app en el navegador de tu preferencia.


## Funcionalidades implementadas en la App.

En la aplicación se muestra una página de bienvenida y un menú con dos botones uno de Inicio y otro de Usuarios, al presionarlo se dirige a una lista de usuarios con nombres y correos, junto a cada usuario un enlace que dice Ver publicaciones, al presionar el enlace, dirige a un apartado donde están las publicaciones de ese usuario, para regresar a la página principal, solo debes buscar el botón Inicio y regresas.

## Decisiones Técnicas.

En la aplicación se usó como principal componente el uso de React Vite y para manejo de rutas, la biblioteca que es React-router-dom, uso de hooks como por ejemplo useEffect para poder obtener los datos de la API, usando una función fetch para realizar la solicitud HTTP, también se instaló TailWind CSS para un diseño convencional y responsivo.

## API que se usó para adquirir los datos:
https://jsonplaceholder.typicode.com/

## Puedes ver la App funcionando:
https://lista-user.netlify.app/
