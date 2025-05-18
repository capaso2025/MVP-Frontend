# CAPO Frontend

Aplicación frontend moderna basada en React, TypeScript y arquitectura limpia, diseñada para ser escalable, mantenible y eficiente.

## Características Principales

- 🚀 **React & TypeScript** - Última versión estable con tipado estricto
- 🔥 **Turbopack** - Desarrollo rápido y optimizado
- 🏛️ **Arquitectura Limpia** - Organización por capas bien definidas
- 🔄 **TanStack Query** - Gestión eficiente de datos remotos

## Requisitos Previos

- Node.js (v18.0.0 o superior)
- npm (v8.0.0 o superior) o yarn (v1.22.0 o superior)
- Git

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/CAPO-SOF/capo-frontend.git
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

## Gestión de Estado

El proyecto utiliza una combinación de:

- **Zustand** - Para estado global complejo
- **TanStack Query** - Para estado de servidor y caché
- **React Context/Hooks** - Para estado local y compartido entre componentes cercanos

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

Las variables de entorno se gestionan mediante archivos `.env`. Todas las variables están tipadas en `src/shared/config/env.ts` para garantizar tipo seguro.

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
