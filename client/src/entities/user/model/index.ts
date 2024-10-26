export type User = {
    id: number;
    nickname: string;
    firstName: string;
    secondName: string;
    email: string;
    password: string;
    avatarUrl: string;
    createdAt: Date;
    updatedAt: Date;
  };
  
  export type AuthResponse = {
    accessToken: string;
    user: User | null;
  };