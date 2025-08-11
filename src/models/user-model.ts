export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  password: string;
  email: string;
  company_name: string;
  company_location: string;
  terms_and_conditions: string;
  updated_at: string;
  created_at: string;
}

export interface IAuthResp {
  access_token: string;
  token_type: string;
}

export interface ISignupResponse {
  message: string;
}

export interface ErrorResponse {
  message: string;
  errors: {
    [field: string]: string[];
  };
}
