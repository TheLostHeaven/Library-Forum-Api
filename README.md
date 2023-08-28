# Library-Forum-Api - Express

![Logo](https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png)
![Logo](https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg)
![Logo](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)

# Estructura de Carpetas 
![Estructure Back-End](https://github.com/TheLostHeaven/Library-Forum-Api/assets/90277397/41416507-2b5a-45fa-b9b0-8b65a1e72139)


## Descripción

Este proyecto es un ejemplo de una API RESTful desarrollada con Express-Js que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en un modelo de Foro de una Biblioteca y se administrada por Administradores con sus respectivos roles implemetando JsonWebToken

## Funcionalidades

- Crear cuentas de Usuarios 
- Crear cuentas de Administradores
- Crear Posts para el foro
- Editar el perfil del los Usuarios logueados en la pagina
- Administrar Usuarios y personas con el rol de Administrador

## Tecnologias Usadas
- NodeJs
- Express-Js
- MongoDB
- Cors
- JsonWebToken
- bcryptjs

## Instalacion

1 Clona el repositorio en tu maquina local
```bash
$ git clone https://github.com/TheLostHeaven/Library-Forum-Api.git
```

2 Navega en el directorio del proyecto 
```bash
$ cd Library-Forum-Api
```

3 Puedes cambiar el origen del proyecto con los siguientes comando

```bash
$ git remote -v
$ git remote remove origin
$ git remote add origin <nueva_url_del_repositorio>
```

4 Instalar las dependecias necesarias
- Recuerda tener el package.json y el package-lock.json en el root de la carpeta y ejecutas

```bash
$ npm i
```

## Uso

1 Inicia la app con 
```bash
$ npm run dev
```

2 Puedes acceder a ella desde el puerto configurado:

http://localhost:4000

3 Prueba las diferentes rutas disponibles para realizar operaciones anteriormente mecionada

## Contacto

Si tienes alguna pregunta o sugerencia o quieres la documentacion para desarrollar este proyecto, no dudes en contactarme en [tiquedaniel2002@gmail.com](tiquedaniel2002@gmail.com).


## Autors

- [@Daniel Molina](https://github.com/TheLostHeaven)
- [@Victor Torres](https://github.com/Victor050106)
- [@Kevin Serna](https://github.com/KeviinSerna)
- [@Santiago Beltran](https://github.com/SBenitezUran)
