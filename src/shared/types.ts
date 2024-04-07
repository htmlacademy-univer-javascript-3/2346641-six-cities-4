export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type ServerError = {
  status: number;
  data: { errorType: string; message: string; details: unknown };
};

export type Point = {
  id: string;
  latitude: number;
  longitude: number;
};
