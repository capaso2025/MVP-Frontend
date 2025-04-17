import { z } from "zod";

/**
 * Esquema que valida las variables de entorno de la aplicación
 * Esto garantiza que todas las variables requeridas estén presentes y tengan el formato correcto
 */
const envSchema = z.object({
  // API
  VITE_API_BASE_URL: z.string().url(),
  VITE_API_TIMEOUT: z.string().transform((val) => parseInt(val, 10)),

  // Características/Feature Flags
  VITE_FEATURE_FLAG_NEW_UI: z.string().transform((val) => val === "true"),
  VITE_FEATURE_FLAG_ANALYTICS: z.string().transform((val) => val === "true"),

  // Autenticación
  VITE_AUTH_DOMAIN: z.string(),
  VITE_AUTH_CLIENT_ID: z.string(),
  VITE_AUTH_REDIRECT_URI: z.string().url(),

  // Registro de errores
  VITE_LOGGING_LEVEL: z.enum(["debug", "info", "warn", "error"]),
});

/**
 * Tipo inferido de las variables de entorno validadas
 */
export type TEnv = z.infer<typeof envSchema>;

/**
 * Variables de entorno validadas y con tipos correctos
 * @throws {Error} Si faltan variables o tienen formato incorrecto
 */
export const env: TEnv = (() => {
  try {
    return envSchema.parse(import.meta.env);
  } catch (error) {
    console.error(
      "Error al validar variables de entorno. Por favor verifica tu archivo .env:",
      error,
    );
    throw new Error("Configuración de entorno inválida");
  }
})();

/**
 * Constantes derivadas de variables de entorno para uso en la aplicación
 */
export const apiConfig = {
  baseUrl: env.VITE_API_BASE_URL,
  timeout: env.VITE_API_TIMEOUT,
};

export const authConfig = {
  domain: env.VITE_AUTH_DOMAIN,
  clientId: env.VITE_AUTH_CLIENT_ID,
  redirectUri: env.VITE_AUTH_REDIRECT_URI,
};

export const featureFlags = {
  newUi: env.VITE_FEATURE_FLAG_NEW_UI,
  analytics: env.VITE_FEATURE_FLAG_ANALYTICS,
};

export const loggingConfig = {
  level: env.VITE_LOGGING_LEVEL,
};
