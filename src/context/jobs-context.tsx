import React, { useState } from "react";

import { Job } from "./data/schema";
import useDialogState from "../hooks/use-dialog-state";

type JobsDialogType = "create" | "update" | "delete" | "import";

interface JobsContextType {
  open: JobsDialogType | null;
  setOpen: (str: JobsDialogType | null) => void;
  currentRow: Job | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<Job | null>>;
}

const JobsContext = React.createContext<JobsContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function JobsProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<JobsDialogType>(null);
  const [currentRow, setCurrentRow] = useState<Job | null>(null);
  return (
    <JobsContext.Provider value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </JobsContext.Provider>
  );
}

export const useJobs = () => {
  const jobsContext = React.useContext(JobsContext);

  if (!jobsContext) {
    throw new Error("useJobss has to be used within <JobsContext>");
  }

  return jobsContext;
};
