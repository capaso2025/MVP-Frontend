import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC, PropsWithChildren } from "react";
import { useState } from "react";

/**
 * Configuración para el cliente de consultas
 */
const defaultQueryClientOptions = {
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      gcTime: 10 * 60 * 1000, // 10 minutos
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
};

/**
 * Proveedor para TanStack Query
 * Inicializa y proporciona el cliente de consultas a toda la aplicación
 */
export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  // Crear un cliente de consultas por instancia de componente
  // Esto es importante para evitar problemas con SSR e hidratación
  const [queryClient] = useState(
    () => new QueryClient(defaultQueryClientOptions),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
