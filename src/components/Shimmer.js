import ShimmerCard from "./ShimmerCard";
const Shimmer = () => {
  return (
    < div className = "mx-16">
    <div
          className="w-96 h-10 mt-10 mx-20 bg-gray-300 rounded-full"
    
    ></div>
    <div className="shimmer-container flex flex-wrap justify-around  py-3 px-20">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
    </div>
  );
};

export default Shimmer;
