Proyecto challenge Eldar
Proyecto consiste en una aplicacion web desarrollada con React y Vite, se Utilizo MUI para el desarrollo de l interfaz grafica, Axios para relizar peticiones HTTP, Toaste para las notificaciones, y la API de JSONPlaceholder. La aplicacion tiene un sistema de autenticacion basado en permisos de usuarios (admin o user). Los usuarios administradores pueden gestionar contenido de los post, usuarios o comentarios (a fines practicos se implemento solo crud de posts), los usuarios de tipo user solo pueden visualizar datos. Se realizo una barra buscadora en las todas las paginas y paginacion en las secciones de post y comments para mejorar la experiencia de usuario.

Instalacion
  Requisitos
    Node.js
    npm o yarn
  1- Clonar el repositorio 
    git clone 
  2- Cambiar al directorio del proyecto
    cd eldar
  3- Instalar las dependencias
    npm install
  4- npm run dev

Estructura del proyecto.
├── 📂 src                     # Código fuente del proyecto
│   ├── 📂 assets              # Archivos estáticos (imágenes, fuentes, etc.)
│   ├── 📂 components          # Componentes reutilizables de React
│   ├── 📂 context             # Contextos de React (por ejemplo, coauth)
│   ├── 📂 hooks               # Hooks personalizados
│   ├── 📂 icons               # Iconos utilizados en la aplicación
│   ├── 📂 layout              # Componentes para el layout de la aplicación
│   ├── 📂 pages               # Páginas principales de la aplicación
│   ├── 📂 router              # Configuración de las rutas de la aplicación
│   ├── 📂 services            # Servicios y peticiones a la API
│   ├── 📂 theme               # Configuración del tema personalizado de MUI
│   ├── 📂 types               # Definiciones de tipos TypeScript
│   ├── 📂 utils               # Funciones utilitarias
│   ├── App.tsx                # Componente principal de la aplicación
│   ├── index.css              # Estilos globales
│   ├── main.tsx               # Punto de entrada de la aplicación
│   └── vite-env.d.ts          # Configuración ambiental de Vite
├── .gitignore                 # Archivos y carpetas ignorados por Git
├── eslint.config.js           # Configuración de ESLint
├── index.html                 # HTML principal
├── package-lock.json          # Bloqueo de dependencias
├── package.json               # Dependencias del proyecto
├── README.md                  # Documentación del proyecto
├── tsconfig.app.json          # Configuración de TypeScript para la app
├── tsconfig.json              # Configuración global de TypeScript
├── tsconfig.node.json         # Configuración TypeScript para Node.js
└── vite.config.ts             # Configuración de Vite

Funcionalidades
  Usuarios adminstrador.
    Pueden listar, crear, modificar y eliminar post.
    A fines practicos no se realizo el crud con respecto a usuarios y comentarios.
  Usuarios de tipo usuario
    Puede ver usuarios, posts y comentarios.
    no tienen la posibilidad de crear modificar e editar.
    
Autenticacion.
  Un sistema de autenticacion basado en un contexto local, que simula una peticion a un archivo json, los busca dentro del json y si el mismo existe se guardan los datos en la sesion del usuario y en un contexto, dependiendo del tipo de usuario se lo redirige a la seccion de administrador o usuario.

API utilizada
  Se utilizo la API recomendada de JSONPlaceholder
  Se creo una capa de servicio la cual maneja la peticiones mediante Axios, se creo una instancia de axios que es utilizada en todas las peticiones.
  Se creo un custom hooks para hacer uso de los datos y separar responsabilidades.

Tecnologias utilizadas.
  React para construir la interfaz de usuario.
  Vite.
  MUI para el desarrollo de estilos.
  Axios para peticiones HTTP
  Toaste para las notificaciones.
  formik para el manejo de formularios.

