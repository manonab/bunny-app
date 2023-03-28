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

export interface RabbitsRequest {
  rabbits: Rabbits[];
}
export interface Rabbits{
  id: string;
  RabbitImage: string;
  RabbitName: string;
  RabbitAge: number;
  RabbitBreed: string;
  RabbitFood: string[];
  isDisplayed: boolean; 
}