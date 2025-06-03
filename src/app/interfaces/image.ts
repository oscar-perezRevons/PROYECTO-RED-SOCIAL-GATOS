
export interface Breed {
  adaptability:number;
  id: string;
  origin:string;
  name: string;
  weight: string;
  height: string;
  life_span: string;
  breed_group: string;
  temperament:string;
}

export interface image {
  id: string;
  url: string;
  width: number;
  height: number;
  mime_type: string;
  breeds: Breed[];
  categories: any[];
}
