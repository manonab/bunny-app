import { Rabbit } from "./rabbits";

export interface User {
     id: string;
     name: string;
     email: string;
     password: string;
     isConnected: boolean;
     rabbits: Rabbit;
}