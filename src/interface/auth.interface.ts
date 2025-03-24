export type Role = 'PASSENGER' | 'ADMIN';

interface FormFieldErrors {
  [key: string]: string[] | undefined;
}

interface BaseAuthForm {
  email: string;
  password: string;
  errors?: FormFieldErrors;
}

export interface LoginAuthForm extends BaseAuthForm {}

export interface RegisterAuthForm extends BaseAuthForm {
  name: string;
  phoneNumber: string;
  confirmPassword: string;
  hasAgreedTermsAndConditions: boolean;
}

export const initialRegisterFormState: RegisterAuthForm = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  hasAgreedTermsAndConditions: false,
}

export const initialLoginFormState: LoginAuthForm = { email: "", password: "" }

export interface AuthSuccessResponse {
  message: string;
  success: boolean;
  statusCode: number;
  data: {
    userId: string;
    role: Role
  }
}

export interface BaseErrorResponse{
  message: string[];
  statusCode: number;
  error: string;
}

