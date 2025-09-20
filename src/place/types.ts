export type Rating = 0 | 1 | 2 | 3 | 4 | 5;
export type PlaceType = 'apartment' | 'room';

export interface Place {
  premium: boolean;
  imageSRC: string;
  price: number;
  rating: Rating;
  name: string;
  type: PlaceType;
  bookmark: boolean;
}
