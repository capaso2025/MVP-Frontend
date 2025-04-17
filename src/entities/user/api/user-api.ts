import { ApiClient } from "@shared/api/base";

/**
 * Tipos para modelo de usuario
 */
export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "guest";
  createdAt: string;
  updatedAt: string;
}

/**
 * Tipos para peticiones y respuestas
 */
export interface IGetUserResponse {
  user: IUser;
}

export interface IUpdateUserRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface IUpdateUserResponse {
  user: IUser;
}

/**
 * Cliente API específico para operaciones relacionadas con usuarios
 */
export class UserApiClient extends ApiClient {
  /**
   * Obtiene los datos de un usuario por su ID
   * @param userId - ID del usuario
   * @returns Datos del usuario
   */
  async getUser(userId: string): Promise<IUser> {
    const response = await this.get<IGetUserResponse>(`/users/${userId}`);
    return response.user;
  }

  /**
   * Actualiza los datos de un usuario
   * @param userId - ID del usuario
   * @param userData - Datos a actualizar
   * @returns Datos actualizados del usuario
   */
  async updateUser(
    userId: string,
    userData: IUpdateUserRequest,
  ): Promise<IUser> {
    const response = await this.patch<IUpdateUserResponse>(
      `/users/${userId}`,
      userData,
    );
    return response.user;
  }

  /**
   * Obtiene el perfil del usuario autenticado
   * @returns Datos del usuario actual
   */
  async getCurrentUser(): Promise<IUser> {
    const response = await this.get<IGetUserResponse>("/users/me");
    return response.user;
  }
}

// Exportar instancia por defecto
export const userApi = new UserApiClient();
