import { Skeleton } from "@/components/ui/skeleton";

export const BotManagementSkeletonLoader = () => (
  <div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Skeleton className="h-32 rounded-xl" />
      <Skeleton className="h-32 rounded-xl" />
      <Skeleton className="h-32 rounded-xl" />
      <Skeleton className="h-32 rounded-xl" />
    </div>
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-8 w-60" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Skeleton className="h-40 rounded-xl" />
        <Skeleton className="h-40 rounded-xl" />
        <Skeleton className="h-40 rounded-xl" />
      </div>
    </div>
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-8 w-60" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Skeleton className="h-44 rounded-xl" />
        <Skeleton className="h-44 rounded-xl" />
      </div>
    </div>
  </div>
);
