export interface ISocialAccount {
  linkedin_company_profile_url: string;
  user_id: number;
  updated_at: string; // ISO timestamp string
  created_at: string; // ISO timestamp string
  id: number;
}

export interface ISocialResponse {
  status: number;
  message: string;
  socials: ISocialAccount;
}

export interface ISocialPayload {
  linkedin_company_profile_url: string;
}
export interface IDeleteSocial {
  status: number;
  message: string;
}
