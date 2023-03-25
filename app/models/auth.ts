export type Auth = {
    email: string;
    password: string;
};

export interface AuthPayload {
    data: {
      message: string;
      user_id: number;
    };
    headers: Headers;
};
     
export interface User {
    user_id: string;
    name: string;
    email: string;
    password: string;
};
  
export interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
};