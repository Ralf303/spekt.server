export interface User {
  id: number;
  yandexId: string;
  createdAt: Date;
}

export interface UserParams {
  id: number;
  key: string;
  value: string;
  actual: boolean;
  createFrom: number;
  userId: number;
  createdAt: Date;
  endActual: Date | null;
}
