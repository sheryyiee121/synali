import { IPagination } from "./pagination-model";

export interface CreatePhoneResponse {
  status: string; // e.g., "success"
  message: string;
  data: PhoneCreationResult[];
}

export interface PhoneCreationResult {
  phone: IPhoneResponse;
  vicidial_response: string;
}

export interface IOrderPayload {
  number_of_bots: number;
  reciept_image: File;
}

export interface IOrderResponse {
  status: number;
  message: string;
  data: IOrder[];
  pagination: IPagination;
}

export interface IOrder {
  id: number;
  number_of_bots: number;
  price: number;
  total_price: number;
  status: "pending" | "completed" | "failed"; // extend as needed
  reciept_url: string;
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
  user_id: number;
}

export interface IPhoneResponse {
  id: number;
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
  created_at: string;
  updated_at: string;
}
