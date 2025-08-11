import { z } from 'zod';

const envSchema = z.object({
  VITE_API_BASE_URL: z.string().url(),
});

export type TEnv = z.infer<typeof envSchema>;

export const env: TEnv = (() => {
  try {
    return envSchema.parse(import.meta.env);
  } catch (error) {
    console.error(
      'Error al validar variables de entorno. Por favor verifica tu archivo .env:',
      error,
    );
    throw new Error('Configuración de entorno inválida');
  }
})();

export const apiConfig = {
  baseUrl: env.VITE_API_BASE_URL,
};
