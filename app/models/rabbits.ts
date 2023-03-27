import { Food } from "./food";

export interface RabbitFormFields {
  id: string;
  image: string;
  name: string;
  age: number;
  breed: string;
  favoriteFood: Food[];
  isDisplayed: boolean; 
}