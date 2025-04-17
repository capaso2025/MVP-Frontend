import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import { apiConfig } from "@shared/config/env";

/**
 * Interfaz para errores de API procesados
 */
export interface IApiError {
  message: string;
  code: string;
  status: number;
  details?: unknown;
}

/**
 * Configuración para crear una instancia de cliente API
 */
export interface IApiClientConfig {
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

/**
 * Clase base para los clientes de API
 * Proporciona una capa de abstracción sobre axios con manejo de errores
 */
export class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(config?: IApiClientConfig) {
    this.axiosInstance = axios.create({
      baseURL: config?.baseURL || apiConfig.baseUrl,
      timeout: config?.timeout || apiConfig.timeout,
      headers: {
        "Content-Type": "application/json",
        ...(config?.headers || {}),
      },
    });

    // Interceptor para agregar token de autenticación
    this.axiosInstance.interceptors.request.use((config) => {
      const token = this.getAuthToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Interceptor para procesar respuestas y errores
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const processedError = this.processApiError(error);
        return Promise.reject(processedError);
      },
    );
  }

  /**
   * Método para obtener el token de autenticación
   * @returns Token de autenticación o null
   */
  private getAuthToken(): string | null {
    // Implementar lógica para obtener token desde localStorage, estado global, etc.
    return localStorage.getItem("auth_token");
  }

  /**
   * Procesa los errores de Axios y los convierte a un formato estandarizado
   * @param error - Error de Axios
   * @returns Error procesado
   */
  private processApiError(error: AxiosError): IApiError {
    const status = error.response?.status || 500;

    // Extraer detalles del error del cuerpo de la respuesta
    const responseData = error.response?.data as
      | Record<string, unknown>
      | undefined;

    return {
      message:
        (responseData?.message as string) ||
        error.message ||
        "Error desconocido",
      code: (responseData?.code as string) || "UNKNOWN_ERROR",
      status,
      details: responseData,
    };
  }

  /**
   * Realiza una petición GET
   * @param url - URL del endpoint
   * @param config - Configuración adicional de Axios
   * @returns Respuesta tipada
   */
  async get<TResponse>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    const response = await this.axiosInstance.get<TResponse>(url, config);
    return response.data;
  }

  /**
   * Realiza una petición POST
   * @param url - URL del endpoint
   * @param data - Datos a enviar
   * @param config - Configuración adicional de Axios
   * @returns Respuesta tipada
   */
  async post<TResponse, TRequest = unknown>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    const response = await this.axiosInstance.post<TResponse>(
      url,
      data,
      config,
    );
    return response.data;
  }

  /**
   * Realiza una petición PUT
   * @param url - URL del endpoint
   * @param data - Datos a enviar
   * @param config - Configuración adicional de Axios
   * @returns Respuesta tipada
   */
  async put<TResponse, TRequest = unknown>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    const response = await this.axiosInstance.put<TResponse>(url, data, config);
    return response.data;
  }

  /**
   * Realiza una petición PATCH
   * @param url - URL del endpoint
   * @param data - Datos a enviar
   * @param config - Configuración adicional de Axios
   * @returns Respuesta tipada
   */
  async patch<TResponse, TRequest = unknown>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    const response = await this.axiosInstance.patch<TResponse>(
      url,
      data,
      config,
    );
    return response.data;
  }

  /**
   * Realiza una petición DELETE
   * @param url - URL del endpoint
   * @param config - Configuración adicional de Axios
   * @returns Respuesta tipada
   */
  async delete<TResponse>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    const response = await this.axiosInstance.delete<TResponse>(url, config);
    return response.data;
  }
}

// Exportar una instancia por defecto para uso general
export const apiClient = new ApiClient();
