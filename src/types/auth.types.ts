export type Role = 'PASSENGER' | 'ADMIN';

export interface AuthForm {
  name: string;
  // role: Role;
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
  errors?: {
    [key: string]: string;
  }
}

