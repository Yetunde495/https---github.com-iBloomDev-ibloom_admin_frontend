/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoStar } from "react-icons/io5";

interface ReviewStarsProps {
  star: number;
}

const ReviewStars: React.FC<ReviewStarsProps> = ({ star }) => {
  const getStarColor = (index: number) => {
    return star && index <= star ? "#FACC15" : "#CCC";
  };

  return (
    <div className="flex text-2xl mb-3">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((index) => (
          <IoStar key={index} style={{ color: getStarColor(index) }} />
        ))}
        <span className="ml-2">{star}.0</span>
      </div>
    </div>
  );
};

export default ReviewStars;
