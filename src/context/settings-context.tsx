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

const SettingsContext = React.createContext<JobsContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function SettingsProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<JobsDialogType>(null);
  const [currentRow, setCurrentRow] = useState<Job | null>(null);
  return (
    <SettingsContext.Provider
      value={{ open, setOpen, currentRow, setCurrentRow }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const settingsContext = React.useContext(SettingsContext);

  if (!settingsContext) {
    throw new Error("useSettings has to be used within <SettingsContext>");
  }

  return settingsContext;
};
