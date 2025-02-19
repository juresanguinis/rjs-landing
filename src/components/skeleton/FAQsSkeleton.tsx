import { Skeleton } from "@/components/ui/skeleton";

export default function FAQsSkeleton() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Simulated Section Title */}
      <Skeleton className="h-8 w-2/3 mx-auto" />

      {/* Simulated FAQ Items */}
      {[...Array(4)].map((_, index) => (
        <div key={index} className="space-y-4">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  );
}
