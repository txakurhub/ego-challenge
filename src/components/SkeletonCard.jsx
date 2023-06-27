const SkeletonCard = () => {
  return (
    <div className="w-10/12 flex justify-center pt-5">
      <div className="w-full h-60 flex flex-col items-center mb-5 animate-pulse">
        <div className="w-9/12 h-20 bg-skeleton mb-4 rounded-md"></div>
        <div className="w-8/12 h-5 bg-skeleton mb-2 rounded-md"></div>
        <div className="w-10/12 h-40 bg-skeleton rounded-md"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
