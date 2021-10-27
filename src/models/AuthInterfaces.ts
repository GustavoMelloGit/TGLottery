import { IUser } from "./UserInterfaces";

export interface ISignIn {
  email: string;
  password: string;
  name: string;
}

export interface AuthProps {
  users: IUser[];
  user: IUser;
  isAuthenticated: boolean;
}

export interface ILogin {
  email: string;
  password: string;
}
