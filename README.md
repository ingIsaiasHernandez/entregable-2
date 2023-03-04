# Entregable 2

## Objetivo

El alumno deberá crear un CRUD de tareas básico. 

<aside>
👀 Obtener a todas las tareas
Crear una tarea
Actualizar una tarea
Eliminar a una tarea

</aside>

## Instrucciones

1.- Deberás tener una tabla llamada todos con las siguientes columas (campos / atributos)

- title —> El titulo de una tarea
- description —> Descripción de la tarea
- status —> status para saber si una tarea esta completada o sigue pendiente.

2.- Debes crear un proyecto con node usando las siguientes dependencias 

- express —> el framework para agilizar el desarrollo de tu CRUD
- sequelize —> El ORM que te permitirá comunicarte con postgres

<aside>
👀 No olvides los controladores que necesita sequelize para poder trabajar con postgres

</aside>

3.- Crear un enrutador con express Router donde tengas las siguietnes rutas (endpoints) 

- Un GET para obtener todas las tareas en la ruta ‘/api/v1/todos’
- Un POST para crear una nueva tarea en la ruta ‘/api/v1/todos’
- Un PUT para actualizar una tarea en la ruta ‘/api/v1/todos/:id’
- Un DELETE para eliminar una tarea en la ruta ‘/api/v1/todos/:id’

4.- Usar la estructura de carpetas que vimos en clase 

/src

— models

— utils

— routes

app.js

5.- Cuando tengas todo funcionando crear un repositorio de git ( no olvides el git ignore, para omitir la carpeta node_modules) y subirlo a github. 

6.- Enviar el repositorio de github en el classcenter. 

## Rubrica

- Sintaxis
    - El códig debe tener la sintaxis correcta
        
        20%
        
- Estructura
    - Debe estar con la estructura de carpetas propuesta
        
        10%
        
- Funcionalidad
    - Al realizar las peticiones por un cliente como postman, no debe generar errores
        
        60%
        
- Código en ingles 10%
