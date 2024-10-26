import { axiosInstance, setAccessToken } from "@/shared/lib/axiosInstance";
import { User } from "../model";

export class UserService {
  //  ============== GET USER SERVICE ===============

  static async refreshAccessToken(): Promise<{
    accessToken: string;
    user: User;
  }> {
    const response = await axiosInstance.get("/tokens/refresh");
    setAccessToken(response.data.accessToken);
   
    return response.data;
  }

  //  ============== SIGN IN SERVICE ===============

  static async signIn(
    email: string,
    password: string
  ): Promise<{ accessToken: string; user: User }> {
    const response = await axiosInstance.post("/auth/signin", {
      email,
      password,
    });

    setAccessToken(response.data.accessToken);
    
    return response.data;
  }

  //  ============== SIGN UP SERVICE ===============

  static async signUp(
    nickname: string,
    firstName: string,
    secondName: string,
    email: string,
    password: string,
    avatarUrl: string
  ): Promise<{ accessToken: string; user: User }> {
    const response = await axiosInstance.post("/auth/signup", {
      nickname,
      firstName,
      secondName,
      email,
      password,
      avatarUrl,
    });

    setAccessToken(response.data.accessToken);

    return response.data;
  }

  //  ============== LOGOUT SERVICE ===============

  static async logout(): Promise<void> {
    await axiosInstance.get("/auth/logout");
    setAccessToken("");
  }


static async updateUser( 
  nickname: string, firstName: string, secondName: string): Promise<{
    accessToken: string;
    user: User;
  }>{
 try {
   const response = await axiosInstance.put(`/auth`, {nickname, firstName, secondName})
   console.log(response.data, 'RESPONSE>DATA=============>>>>>>>>>');
   console.log(response.data.accessToken, 'accessToken'); // undefined
  return response.data.updateUser
 } catch (error) {
   console.error('Error fetching user:', error);
   throw new Error('Failed to fetch user.');
 }
}
}
