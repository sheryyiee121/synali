import { IconPlus } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { useJobs } from "@/src/context/jobs-context";

export function CreatePrimaryButton() {
  const { setOpen, open } = useJobs();

  console.log("open", open);

  return (
    <div className="flex gap-2">
      {/* <Button
        variant="outline"
        className="space-x-1"
        onClick={() => setOpen("import")}
      >
        <span>Import</span> <IconDownload size={18} />
      </Button> */}
      <Button className="space-x-1" onClick={() => setOpen("create")}>
        <span>Create</span> <IconPlus size={18} />
      </Button>
    </div>
  );
}
