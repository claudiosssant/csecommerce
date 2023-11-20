import { ArrowDown } from "react-feather";
import { Badge, BadgeProps } from "./badge";
import { twMerge } from "tailwind-merge";

const DiscountBadge = ({children, className, ...props}: BadgeProps) => {
  return (
    <div>
      <Badge className={twMerge("px-2 py-[2px]", className)} { ...props }>
        <ArrowDown size={16} /> {children}%
      </Badge>
    </div>
  );
};

export default DiscountBadge;
