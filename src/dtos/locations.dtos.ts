export interface CreateLocationDto {
  place_id: string;
}

export interface UpdateLocationDto {
  address?: string;
  place_id?: string;
  latitud?: string;
  longitud?: string;
}
