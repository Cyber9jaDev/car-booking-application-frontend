export type Role = 'PASSENGER' | 'ADMIN';

export interface AuthForm {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
  terms_and_conditions: boolean;
  errors?:{
    name?: string[] | undefined;
    email?: string[] | undefined;
    phone_number?: string[] | undefined;
    password?: string[] | undefined;
    confirm_password?: string[] | undefined;
  }
}
export const initialAuthFormState: AuthForm = {
  name: "",
  email: "",
  phone_number: "",
  password: "",
  confirm_password: "",
  terms_and_conditions: false,
  // errors: {
  //   name: undefined,
  //   email: undefined,
  //   phone_number: undefined,
  //   password: undefined,
  //   confirm_password: undefined,
  // }
}

