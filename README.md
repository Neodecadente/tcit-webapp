# TCIT WebApp

Esta es la aplicación web frontend para el proyecto TCIT, construida con Angular.

## Requisitos

- [Node.js y npm](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

## Comienzo

### 1. Clone el repositorio:
    ```
      git clone https://github.com/Neodecadente/tcit-webapp.git
      cd tcit-webapp
    ```
    Instale las dependencias:

    `npm install`

### 2. Configure el archivo de entorno:
  

### 3. Cree un archivo src/environments/environment.ts con el siguiente contenido:
    ```
      export const environment = {
        apiUrl: 'https://localhost:5289/api/post/'
      };
    ```

    *** La apiUrl de ejemplo es la que correspondería si usas el backend del proyecto tcit-api (https://github.com/Neodecadente/tcit-api) ***

### 4. Inicie la aplicación:
    `ng serve`

### 5. La aplicación web debería estar funcionando en http://localhost:4200.