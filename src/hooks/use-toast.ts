import React from "react";
import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: "default" | "success" | "error" | "warning" | "info";
};

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

function toast({
  title,
  description,
  action,
  variant = "default",
  ...props
}: ToastProps) {
  const id = genId();

  const sonnerOptions = {
    id,
    description,
    action,
    ...props,
  };

  switch (variant) {
    case "success":
      sonnerToast.success(title, sonnerOptions);
      break;
    case "error":
      sonnerToast.error(title, sonnerOptions);
      break;
    case "warning":
      sonnerToast.warning(title, sonnerOptions);
      break;
    case "info":
      sonnerToast.info(title, sonnerOptions);
      break;
    default:
      sonnerToast(title, sonnerOptions);
  }

  return {
    id,
    dismiss: () => sonnerToast.dismiss(id),
    update: (newProps: Partial<ToastProps>) =>
      sonnerToast(title || newProps.title, { ...sonnerOptions, ...newProps }),
  };
}

function useToast() {
  return {
    toast,
    dismiss: (toastId?: string) => sonnerToast.dismiss(toastId),
  };
}

export { useToast, toast };
