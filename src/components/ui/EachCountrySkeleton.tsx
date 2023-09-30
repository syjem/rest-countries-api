import { Skeleton } from "./skeleton";

const EachCountrySkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-24">
      <Skeleton className="w-full max-w-[500px] h-[300px] mr-10" />

      <div className="w-full flex flex-col gap-6 lg:pt-10 pb-4">
        <Skeleton className="w-full max-w-[350px] h-4" />
        <Skeleton className="w-[200px] h-4" />
        <Skeleton className="w-[200px] h-4" />
        <Skeleton className="w-[200px] h-4" />
        <Skeleton className="w-[200px] h-4" />
        <Skeleton className="w-[200px] h-4" />
        <Skeleton className="w-full max-w-[350px] h-4" />
      </div>
    </div>
  );
};

export default EachCountrySkeleton;
