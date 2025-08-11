export interface IServer {
  id: number;
  user_id: number;
  vicidial_url: string;
  ssh_ip: string | null;
  ssh_password: string | null;
  api_username: string;
  api_password: string;
  server_ip: string | null;
  created_at: string;
  updated_at: string;
}

export interface IServerResponse {
  id: number;
  user_id: number;
  vicidial_url: string;
  ssh_ip: string | null;
  ssh_password: string | null;
  api_username: string;
  api_password: string;
  server_ip: string | null;
  created_at: string;
  updated_at: string;
}

export interface IDeleteServer {
  message: string;
}

export interface IUpdateServerPayload {
  id: number;
  payload: IServerPayload;
}

export interface IServerPayload {
  vicidial_url: string;
  api_username: string;
  api_password: string;
  server_ip: string;
}

export interface IAllocateServerPayload {
  vicidial_server_id: number;
  number_of_phones: number;
}
