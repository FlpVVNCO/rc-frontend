# Frontend para Challenge de Lab Microsystem


Frontend ha sido creado utilizando Next.js y Material-UI como parte de un desafío para Lab Microsystem. 

[Visitar la aplicación desplegada](https://readconnect.vercel.app/)

## Comenzando 🚀

Estas instrucciones te ayudarán a clonar y configurar el proyecto en tu máquina local para desarrollo y pruebas.

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema. Necesitarás una cuenta de [GitHub](https://github.com/) para clonar el repositorio.

### Instalación 🔧

1. Clona este repositorio a tu máquina local:

   ```
      git clone https://github.com/FlpVVNCO/rc-frontend/
   ```
2. Ve al directorio del proyecto:

   ```
      cd repo-del-frontend
   ```
4. Instala las dependencias utilizando npm:

    ```
      npm install
    ```
 
5. Crea un archivo `.env.local` en el directorio raíz del proyecto y configura tus variables de entorno:

   ```
      NEXT_PUBLIC_API_URL=https://api.tuapp.com
      NEXTAUTH_URL=https://tuapp.com
   ```

Asegúrate de configurar las variables de entorno adecuadamente según tus necesidades.

5. Inicia el servidor de desarrollo:

   ```
      npm run dev
   ```
_El proyecto se ejecutará en `http://localhost:3000`. Puedes acceder a él desde tu navegador._
   
## Dependencias y Tecnologías

A continuación, se enumeran las principales dependencias utilizadas en este proyecto:

- [Next.js](https://nextjs.org/): Un framework de React para la construcción de aplicaciones web modernas.

- [Material-UI](https://material-ui.com/): Una biblioteca de componentes de interfaz de usuario de React para un diseño atractivo y consistente.

- [Axios](https://axios-http.com/): Un cliente HTTP basado en Promesas para realizar solicitudes a servidores.

- [NextAuth](https://next-auth.js.org/): Un completo sistema de autenticación para aplicaciones web.

- [React Icons](https://react-icons.github.io/react-icons/): Una biblioteca que proporciona iconos populares de fuentes como Font Awesome y más.
