import { toast } from "sonner";
import { ConfirmDialog } from "../../../components/layout/confirm-dialog";

import { useSettings } from "@/src/context/settings-context";

export function JobsDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = useSettings();

  return (
    <>
      {currentRow && (
        <>
          <ConfirmDialog
            key="task-delete"
            destructive
            open={open === "delete"}
            onOpenChange={() => {
              setOpen("delete");
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            handleConfirm={() => {
              setOpen(null);
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
              toast.success("The following task has been deleted:");
            }}
            className="max-w-md"
            title={`Delete this task: ${currentRow.id} ?`}
            desc={
              <>
                You are about to delete a task with the ID{" "}
                <strong>{currentRow.id}</strong>. <br />
                This action cannot be undone.
              </>
            }
            confirmText="Delete"
          />
        </>
      )}
    </>
  );
}
