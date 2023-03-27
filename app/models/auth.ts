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
export interface SignUpParams {
    name: string;
    email: string;
    password: string;
    rabbitName: string;
    rabbitAge: number | null;
    rabbitBreed: string;
    rabbitFood: string[];
    rabbitImage: string;
}