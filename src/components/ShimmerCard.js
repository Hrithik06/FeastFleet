const ShimmerCard = () => {
  return (
    <div className="shimmer-card flex flex-col gap-5 w-64 h-80 p-2">
      <div className="img bg-gray-200 w-full h-44 rounded-lg"></div>
      <div className="text-1 bg-gray-200 w-2/3 h-3 rounded-lg"></div>
      <div className="text-2 bg-gray-200 w-1/2 h-3 rounded-lg"></div>
    </div>
  );
};

export default ShimmerCard;
