export interface registerTruckDto {
  user: string;
  year: string;
  color: string;
  plate: string;
}

export interface updateTruckDto {
  user?: string;
  year?: string;
  color?: string;
  plate?: string;
}

export interface detailTruckDto {
  user: string;
  year: string;
  color: string;
  plate: string;
}
