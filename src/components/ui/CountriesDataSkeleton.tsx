import { Skeleton } from "./skeleton";

const CountriesDataSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[300px]">
      <Skeleton className="w-full h-40" />

      <div className="w-full flex flex-col gap-6 pb-4 ml-4">
        <Skeleton className="w-full max-w-[250px] h-4" />
        <Skeleton className="w-full max-w-[200px] h-4" />
        <Skeleton className="w-full max-w-[200px] h-4" />
        <Skeleton className="w-full max-w-[200px] h-4" />
      </div>
    </div>
  );
};

export default CountriesDataSkeleton;
