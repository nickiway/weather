export interface ICityResponse {
  id: number;
  coord: {
    lat: number;
    lon: number;
  };

  country: string;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}
export interface ICity extends ICityResponse {}
