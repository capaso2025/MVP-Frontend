# CAPO Frontend

Aplicación frontend moderna basada en React, TypeScript y arquitectura limpia, diseñada para ser escalable, mantenible y eficiente.

## Características Principales

- 🚀 **React & TypeScript** - Última versión estable con tipado estricto
- 🔥 **Turbopack** - Desarrollo rápido y optimizado
- 🏛️ **Arquitectura Limpia** - Organización por capas bien definidas
- 🔄 **TanStack Query** - Gestión eficiente de datos remotos
- 🔒 **Integración AWS** - Preparado para despliegue en S3 + CloudFront
- 📦 **Monorepo opcional** - Estructura preparada para compartir código

## Requisitos Previos

- Node.js (v18.0.0 o superior)
- npm (v8.0.0 o superior) o yarn (v1.22.0 o superior)
- Git

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/nandoll/capo-frontend.git
cd capo-frontend

# Instalar dependencias
npm install
# o
yarn install

# Configurar husky
npm run prepare
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo (con Turbopack)
- `npm run build` - Crea la versión de producción optimizada
- `npm run preview` - Previsualiza la versión de producción localmente
- `npm run typecheck` - Verifica los tipos de TypeScript
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Corrige problemas detectados por ESLint
- `npm run format` - Formatea código con Prettier
- `npm run test` - Ejecuta pruebas
- `npm run test:watch` - Ejecuta pruebas en modo observador
- `npm run test:coverage` - Genera informe de cobertura de pruebas

## Estructura del Proyecto

El proyecto sigue una arquitectura limpia adaptada a frontend con capas bien definidas:

### Capas Principales

- **app/** - Configuración de la aplicación, proveedores globales, enrutamiento
- **pages/** - Componentes a nivel de ruta/página
- **widgets/** - Componentes complejos compuestos
- **features/** - Lógica y UI autocontenida para funcionalidades específicas
- **entities/** - Unidades de negocio reutilizables
- **shared/** - Código reutilizable de bajo nivel

### Estructura Detallada

```
src/
├── app/               # Capa de aplicación
│   ├── providers/     # Proveedores globales
│   ├── styles/        # Estilos globales
│   ├── App.tsx        # Componente principal
│   └── index.tsx      # Punto de entrada
├── pages/             # Páginas/Rutas
├── widgets/           # Widgets complejos
├── features/          # Funcionalidades
│   ├── auth/          # Ejemplo: Autenticación
│   │   ├── ui/        # Componentes UI
│   │   ├── model/     # Lógica de negocio
│   │   ├── api/       # Integraciones API
│   │   └── lib/       # Utilidades
├── entities/          # Entidades de negocio
├── shared/            # Código compartido
    ├── ui/            # Componentes UI genéricos
    ├── lib/           # Utilidades
    ├── api/           # Configuración API
    └── config/        # Configuraciones
```

## Principios de Arquitectura

Este proyecto sigue estrictamente los siguientes principios:

1. **Separación de Responsabilidades (SoC)** - Cada módulo tiene un propósito único y bien definido.
2. **Inversión de Dependencias** - Las capas superiores no dependen directamente de las inferiores.
3. **Encapsulamiento** - Los detalles de implementación están ocultos detrás de interfaces.
4. **Reutilización** - El código está organizado para maximizar la reutilización.

## Gestión de Estado

El proyecto utiliza una combinación de:

- **Zustand** - Para estado global complejo
- **TanStack Query** - Para estado de servidor y caché
- **React Context/Hooks** - Para estado local y compartido entre componentes cercanos

## Integración con API (AWS Lambda)

La comunicación con APIs se realiza a través de una capa de abstracción ubicada en `shared/api/`. Esta capa encapsula toda la lógica de comunicación con las Lambdas de AWS, aprovechando TanStack Query para gestionar el caché, reintentos y estados de carga/error.

## Despliegue en AWS

La aplicación está diseñada para ser desplegada en AWS mediante el siguiente proceso:

1. Crear un build optimizado con `npm run build`
2. Subir los archivos generados en la carpeta `dist` a un bucket S3 configurado para alojamiento web estático
3. Configurar CloudFront como CDN delante del bucket para:
   - Servir el contenido a través de HTTPS
   - Mejorar el rendimiento mediante caché
   - Gestionar redirecciones para SPA (Single Page Application)

### Configuración Recomendada para S3

```json
{
  "IndexDocument": {
    "Suffix": "index.html"
  },
  "ErrorDocument": {
    "Key": "index.html"
  }
}
```

### Configuración de CloudFront

- **Origen**: Bucket S3 configurado para alojamiento web
- **Comportamientos de caché**:
  - Tiempo de vida (TTL) para archivos estáticos (JS/CSS): 1 año
  - TTL para index.html: 0 o muy bajo
- **Función Lambda@Edge**: Para gestionar redirecciones SPA (opcional)

## Variables de Entorno

Las variables de entorno se gestionan mediante archivos `.env`, `.env.development` y `.env.production`. Todas las variables están tipadas en `src/shared/config/env.ts` para garantizar tipo seguro.

Variables clave:

- `VITE_API_BASE_URL` - URL base para las APIs
- `VITE_AUTH_CLIENT_ID` - ID de cliente para autenticación
- `VITE_FEATURE_FLAG_*` - Banderas de características

## Convenciones de Código

Este proyecto sigue estrictas convenciones:

- **ESLint** - Para garantizar calidad y consistencia
- **Prettier** - Para formateo automático
- **TypeScript Strict Mode** - Para máxima seguridad de tipos
- **Husky** - Para verificar código antes de commit/push

## Contribución

1. Crea una rama desde `develop`
2. Implementa tus cambios siguiendo las convenciones de código
3. Asegúrate de que todas las pruebas pasen
4. Crea un Pull Request hacia `develop`

## Licencia

Este proyecto es propiedad exclusiva de CAPO. Todos los derechos reservados.
