import { FaCheckCircle } from "react-icons/fa";
import Button from "../button";

type PricingcardProps = {
  tier: number;
  items: Array<string>;
  action: () => void;
  feature: string;
  price: number;
};

const PricingCard: React.FC<PricingcardProps> = ({
  tier,
  items,
  action,
  feature,
  price,
}) => {
  return (
    <div
      className={`${
        tier === 1 ? "bg-[#23769E0D text-black/80 border-t border-slate-300" : "bg-primary text-white/80"
      } relative rounded-2xl shadow-md py-6 px-9 w-full flex flex-col`}
    >
      <div className="h-[90%]">
      <div>
        <h3 className={`${tier === 1 ? "" : "text-white"} md:text-2xl text-xl mb-1.5`}>Tier {tier}</h3>
        <p className={"text-lg font-medium mb-2"}>{feature}</p>
        <h2 className={`${tier === 1 ? "" : "text-white"} md:text-3xl text-2xl font-bold mb-5`}>
          ${price} <small className="font-normal text-lg">/month</small>
        </h2>
      </div>

      <div>
        <ul>
          {items.map((val, index) => (
            <li key={index} className="flex gap-2 mb-4">
              <span>
                <FaCheckCircle className="mt-1" />
              </span>
              {val}
            </li>
          ))}
        </ul>
      </div>
      </div>
     

      <div className="flex w-full items-center justify-center  pt-6 pb-4 h-[10%]">
        {tier === 1 ? (
          <Button onClick={action} width="full">Choose Plan</Button>
        ) : (
          <Button onClick={action} variant="white" width="full">
            Choose Plan
          </Button>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
