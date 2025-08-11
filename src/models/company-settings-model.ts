export interface ICompanyDetailsPayload {
  company_name: string;
  company_website: string;
  number_of_employees: string;
  industry: string;
  country?: string;
  social_media?: string;
  about_your_company?: string;
  mission?: string;
  benefits?: string[];
  values?: string[];
  company_logo?: File;
}

export interface ICompanyDetails {
  company_name: string;
  company_website: string;
  number_of_employees: string;
  industry: string;
  country: string | null;
  social_media: string | null;
  about_your_company: string | null;
  mission: string | null;
  benefits: string | null;
  values: string | null;
  user_id: number;
  updated_at: string;
  created_at: string;
  id: number;
}

export interface ICompanyDetailsResponse {
  status: number;
  message: string;
  company_details: ICompanyDetails;
}

export interface IDeleteCompany {
  status: number;
  message: string;
}
