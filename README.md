<img width="1899" height="910" alt="image" src="https://github.com/user-attachments/assets/b8974e3a-53d8-4d43-8f26-65ce38ec0286" />

# 🎵 Spotify App

Una aplicación web moderna desarrollada con React que te permite explorar y gestionar tu música favorita de Spotify. Busca artistas, explora álbumes, y guarda tus favoritos directamente desde tu cuenta de Spotify.

## 📖 ¿Qué hace esta aplicación?

Esta aplicación te permite:

- **🔐 Iniciar sesión con Spotify**: Conecta tu cuenta de Spotify de forma segura usando OAuth2
- **🔍 Buscar artistas y álbumes**: Encuentra música usando el buscador integrado
- **👤 Ver detalles de artistas**: Explora información detallada de tus artistas favoritos
- **💾 Guardar álbumes**: Añade álbumes a tu biblioteca de Spotify directamente desde la app
- **📚 Ver tus álbumes guardados**: Accede rápidamente a todos los álbumes que has guardado
- **🎨 Interfaz moderna**: Diseño responsive y atractivo con Tailwind CSS

## 🚀 Inicio Rápido

### Pre-requisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión recomendada: 20.18.0 o superior)
  - Descarga desde: [nodejs.org](https://nodejs.org/es/)
  - O usa [NVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) para gestionar versiones
- **Yarn** (gestor de paquetes)
  - Se instala automáticamente con Node.js o puedes instalarlo: `npm install -g yarn`

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd test-spotify
   ```

2. **Instala las dependencias**
   ```bash
   yarn install
   ```

3. **Configura las variables de entorno**
   
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   VITE_SPOTIFY_CLIENT_ID=tu_client_id_de_spotify
   VITE_SPOTIFY_CLIENT_SECRET=tu_client_secret_de_spotify
   VITE_URL_PRODUCTION_APP=http://localhost:5173
   ```
   
   > 💡 **Nota**: Para obtener tus credenciales de Spotify, necesitas crear una aplicación en el [Dashboard de Spotify para Desarrolladores](https://developer.spotify.com/dashboard)

4. **Inicia el servidor de desarrollo**
   ```bash
   yarn dev
   ```

5. **Abre tu navegador**
   
   La aplicación estará disponible en `http://localhost:5173`

## 🛠️ Comandos Disponibles

### Desarrollo

```bash
yarn dev
```
Inicia el servidor de desarrollo con hot-reload. Los cambios se reflejan automáticamente en el navegador.

### Construcción para Producción

```bash
yarn build
```
Genera una versión optimizada de la aplicación lista para producción en la carpeta `dist/`.

### Vista Previa de Producción

```bash
yarn preview
```
Sirve la versión de producción localmente para probar antes de desplegar.

### Linting (Análisis de Código)

```bash
yarn lint
```
Analiza el código en busca de errores, prácticas incorrectas y problemas de estilo siguiendo las reglas de ESLint.

### Formateo de Código

```bash
yarn format
```
Formatea automáticamente el código usando Prettier para mantener un estilo consistente y legible.

### Testing

```bash
yarn test
```
Ejecuta todos los tests unitarios. Los archivos de test deben estar en carpetas `__test__` dentro del proyecto.

```bash
yarn test:watch
```
Ejecuta los tests en modo watch, re-ejecutando automáticamente cuando detecta cambios.

## 📁 Estructura del Proyecto

El proyecto sigue una arquitectura modular y organizada:

```
src/
├── api/              # Capa de API - Comunicación con Spotify
│   └── spotify/      # Endpoints específicos de Spotify
├── components/       # Componentes reutilizables de React
├── constants/        # Constantes centralizadas (rutas, API, storage)
├── config/           # Configuración (env, Spotify)
├── hooks/            # Custom hooks de React
├── layouts/          # Componentes de layout (Header, Footer)
├── lib/              # Utilidades compartidas (cliente HTTP)
├── pages/            # Páginas de la aplicación
├── routes/           # Configuración de rutas
├── services/         # Lógica de negocio
├── types/            # Definiciones de tipos TypeScript
└── utils/            # Utilidades generales
```

### Características de la Arquitectura

- **Cliente HTTP centralizado**: Manejo consistente de peticiones y errores
- **Separación de responsabilidades**: API, servicios y componentes bien organizados
- **Type Safety**: TypeScript en todo el proyecto para mayor seguridad
- **Constantes centralizadas**: Fácil mantenimiento y actualización
- **Servicios modulares**: Lógica de negocio separada y reutilizable

## 🧪 Ambientes

- **Desarrollo Local**: `http://localhost:5173` (al ejecutar `yarn dev`)
- **Producción**: [App Production](https://andres-coello-full-stack.vercel.app)
- **Plataforma de Deploy**: [Vercel](https://vercel.com)

## 🛠️ Tecnologías Utilizadas

### Core

- **[React 18](https://es.react.dev/)** - Librería para construir interfaces de usuario
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipado estático para mayor seguridad
- **[Vite](https://vitejs.dev/)** - Herramienta de construcción rápida y moderna

### Estilos

- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utility-first para diseño rápido

### Autenticación

- **[OAuth 2.0](https://auth0.com/es/intro-to-iam/what-is-oauth-2)** - Protocolo de autorización seguro
- **[Spotify Web API](https://developer.spotify.com/)** - API oficial de Spotify para desarrolladores

### Testing

- **[Vitest](https://vitest.dev/)** - Framework de testing rápido
- **[Testing Library](https://testing-library.com/)** - Utilidades para testing de componentes React

### Calidad de Código

- **[ESLint](https://eslint.org/)** - Linter para detectar problemas en el código
- **[Prettier](https://prettier.io/)** - Formateador automático de código
- **[Husky](https://typicode.github.io/husky/)** - Git hooks para asegurar calidad antes de commits

### PWA

- **[Vite PWA Plugin](https://vite-pwa-org.netlify.app/)** - Soporte para Progressive Web App (funciona offline)

## 🔒 Seguridad y Privacidad

- La aplicación utiliza OAuth 2.0 para autenticación segura
- Los tokens de acceso se almacenan de forma segura en cookies
- No se almacenan credenciales sensibles en el código
- Todas las comunicaciones con la API de Spotify son mediante HTTPS

## 📝 Notas para Desarrolladores

### Configuración de Spotify Developer

Para usar esta aplicación, necesitas:

1. Crear una cuenta en [Spotify for Developers](https://developer.spotify.com/)
2. Crear una nueva aplicación en el Dashboard
3. Configurar la URL de redirección: `http://localhost:5173/callback` (desarrollo) o tu URL de producción
4. Copiar el Client ID y Client Secret a tu archivo `.env`

### Mejores Prácticas Implementadas

Este proyecto sigue las mejores prácticas de desarrollo:

- ✅ **Arquitectura modular**: Código organizado por responsabilidades
- ✅ **Type Safety**: TypeScript en todo el proyecto
- ✅ **Manejo de errores**: Sistema centralizado de manejo de errores
- ✅ **Código limpio**: ESLint y Prettier configurados
- ✅ **Testing**: Estructura preparada para tests unitarios
- ✅ **PWA Ready**: Funciona como aplicación web progresiva
- ✅ **Responsive Design**: Optimizado para todos los dispositivos

## 🤝 Contribuir

Si deseas contribuir a este proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y personal.

## 🐛 Reportar Problemas

Si encuentras algún bug o tienes sugerencias, por favor abre un [issue](https://github.com/tu-usuario/test-spotify/issues) en el repositorio.

## 📚 Recursos Adicionales

- [Documentación de Spotify Web API](https://developer.spotify.com/documentation/web-api)
- [Documentación de React](https://es.react.dev/)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs/)

---

## 👨‍💻 Autores ✒️

- **Andrés Coello Goyes** - _SOFTWARE ENGINEER_ - [Andres Coello](https://linktr.ee/gandrescoello)

#### 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://andres-coello-goyes.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andrescoellogoyes/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/acoellogoyes)

## 🙏 Expresiones de Gratitud 🎁

- Pásate por mi perfil para ver algún otro proyecto 📢
- Desarrollemos alguna app juntos, puedes escribirme en mis redes
- Muchas gracias por pasarte por este proyecto 🤓

---

⌨️ con ❤️ por [Andres Coello Goyes](https://linktr.ee/gandrescoello) 😊

<img width="400" height="400" alt="1764558900283" src="https://github.com/user-attachments/assets/cde88968-7856-49ec-bdb1-53a82bf9caa3" />
