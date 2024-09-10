export interface User {
  id: Number;
  yandexId: String;
}

export interface UserParams {
  id: Number;
  key: String;
  value: String;
  actual: boolean;
  createFrom: Number;
  userId: Number;
  createdAt: Date;
  endActual: Date | null;
}
