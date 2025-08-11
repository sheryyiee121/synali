export interface PhoneData {
  user_id: number;
  extension: string;
  dialplan_number: string;
  voicemail_id: string;
  phone_login: string;
  phone_pass: string;
  server_ip: string;
  protocol: string;
  registration_password: string;
  phone_full_name: string;
  local_gmt: string;
  outbound_cid: string;
  phone_context: string;
  email: string | null;
  status: string;
  updated_at: string;
  created_at: string;
  id: number;
}

export interface PhoneEntry {
  phone: PhoneData;
  vicidial_response: string;
}

export interface UserEntry {
  vicidial_response: string;
}

export interface ICreatePhoneUserResponseData {
  phones: PhoneEntry[];
  users: UserEntry[];
}

export interface IPhoneUserResponse {
  status: string;
  message: string;
  data: ICreatePhoneUserResponseData;
}

export interface IPhoneDataResponse {
  status: boolean;
  message: string;
  data: IPhone[];
  pagination: IPagination;
}

export interface ICreatePhonePayload {
  current_page?: number;
  last_page?: number;
  per_page?: number;
  total?: number;
}

export interface IPhone {
  status: "available" | "disabled" | "in_call" | string;
  server_url: string;
  server_id: number;
  last_call_date: string | null; // ISO date or null
  voice_url: string | null;
  name: string | null;
}

export interface IPagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
