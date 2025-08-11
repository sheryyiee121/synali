export interface IApplication {
  id: number;
  // Define properties here if data array is populated in future responses
}

export enum ApplicationStatus {
  Applied = "Applied",
  InterviewScheduled = "Interview Scheduled",
  Rejected = "Rejected",
  Hired = "Hired",
  // Add more statuses if needed
}

export interface ICandidateApplication {
  id: number;
  name: string;
  email: string;
  contact_via: "email" | "phone" | "linkedin"; // adjust as needed
  consent: boolean;
  CV: string;
  company_name: string;
  job_role: string;
  ATA_score: string;
  status: ApplicationStatus;
  job_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}
