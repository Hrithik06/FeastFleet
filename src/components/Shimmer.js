import ShimmerCard from "./ShimmerCard";
const Shimmer = () => {
  return (
    <>
    <div
          className="w-96 h-10 mt-10 ml-32 p-5 border-solid border-2 border-gray-300 rounded-lg"
    
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
    </>
  );
};

export default Shimmer;
