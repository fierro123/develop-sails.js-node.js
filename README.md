# develop-sails.js-node.js
Escuela de aprendizaje node.js usando framework sails.js

## Instalación
* Clonar el repositorio ```git clone [url_proyecto]```
* Ingresar al repositorio por consola ```cd develop-sails.js-node.js```
* Instalar las dependencias  con ```npm install```
* Ejecutarlo ```sails lift```

## Solución de problemas
### Si aparece algún mensaje de error de configuración de algún path
* Borrar la carpeta node_modules ```rm -rf node_modules```
* Volver a ejecutar ```npm install```
* Ejecutar ```sails lift```