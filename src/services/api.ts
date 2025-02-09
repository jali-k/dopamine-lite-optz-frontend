const BASE_URL = 'http://localhost:8080/api';

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

export const api = {
  request: async <T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> => {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new ApiError(response.status, response.statusText);
      }

      const jsonResponse = await response.json();
      if (jsonResponse.success) {
        return jsonResponse.data;
      } else {
        throw new ApiError(response.status, jsonResponse.message || 'API error');
      }
    } catch (error) {
      if (error instanceof ApiError) throw error;
      throw new Error('Network error occurred');
    }
  }
};