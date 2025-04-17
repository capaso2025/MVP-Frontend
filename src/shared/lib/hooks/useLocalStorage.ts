import { useCallback, useEffect, useState } from "react";

/**
 * Opciones para el hook useLocalStorage
 */
export interface IUseLocalStorageOptions<T> {
  /**
   * Valor por defecto
   */
  defaultValue?: T;

  /**
   * Función para serializar el valor antes de guardarlo
   * @default JSON.stringify
   */
  serialize?: (value: T) => string;

  /**
   * Función para deserializar el valor al cargarlo
   * @default JSON.parse
   */
  deserialize?: (value: string) => T;

  /**
   * Evento a escuchar para sincronización entre tabs
   * @default 'storage'
   */
  eventToListen?: string;
}

/**
 * Hook para trabajar con localStorage con tipado fuerte
 * Mantiene sincronizado el estado entre el componente y localStorage
 *
 * @param key - Clave para usar en localStorage
 * @param options - Opciones de configuración
 * @returns Tupla con el valor actual y una función para actualizarlo
 */
export const useLocalStorage = <T>(
  key: string,
  options: IUseLocalStorageOptions<T> = {},
): [T | undefined, (value: T | ((val: T | undefined) => T)) => void] => {
  const {
    defaultValue,
    serialize = JSON.stringify,
    deserialize = JSON.parse,
    eventToListen = "storage",
  } = options;

  // Estado interno
  const [state, setState] = useState<T | undefined>(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      if (storedValue) return deserialize(storedValue);
      return defaultValue;
    } catch (error) {
      console.error(`Error al recuperar '${key}' de localStorage:`, error);
      return defaultValue;
    }
  });

  // Actualizar localStorage cuando cambia el estado
  useEffect(() => {
    if (state === undefined) {
      window.localStorage.removeItem(key);
    } else {
      try {
        window.localStorage.setItem(key, serialize(state));
      } catch (error) {
        console.error(`Error al guardar '${key}' en localStorage:`, error);
      }
    }
  }, [key, state, serialize]);

  // Escuchar cambios de localStorage en otras tabs/ventanas
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key !== key) return;

      try {
        const newValue = e.newValue ? deserialize(e.newValue) : undefined;
        setState(newValue || defaultValue);
      } catch (error) {
        console.error(
          `Error al procesar evento de almacenamiento para '${key}':`,
          error,
        );
      }
    };

    window.addEventListener(
      eventToListen,
      handleStorageChange as EventListener,
    );

    return () => {
      window.removeEventListener(
        eventToListen,
        handleStorageChange as EventListener,
      );
    };
  }, [key, eventToListen, deserialize, defaultValue]);

  // Función para actualizar el estado
  const updateValue = useCallback((value: T | ((val: T | undefined) => T)) => {
    setState((prevState) => {
      const newState = value instanceof Function ? value(prevState) : value;
      return newState;
    });
  }, []);

  return [state, updateValue];
};
