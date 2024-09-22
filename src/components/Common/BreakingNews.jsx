import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex mb-10 bg-gray-400 p-4 rounded">
      <button className="btn btn-secondary mr-6">Breaking News</button>
      <Marquee pauseOnHover={true} className="font-bold">
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
