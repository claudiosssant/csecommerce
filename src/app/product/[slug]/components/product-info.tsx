import { Badge } from "@/components/ui/badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { ArrowDown } from "react-feather";

interface ProductInfoProps {
  product: Pick<
      ProductWithTotalPrice,
      "basePrice"
      | "description"
      | "discountPercentage"
      | "totalPrice"
      | "name"
  
  >
}



const ProductInfo = ({product: {name, basePrice, totalPrice, description, discountPercentage }} : ProductInfoProps) => {
  return ( 
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{name}</h2>

      <div className="flex items-center gap-1">
        <h1 className="text-xl font-bold gap-2">R$ {totalPrice.toFixed(2)}</h1>
        {discountPercentage > 0 && (
          <Badge className="px-2 pt-[2px]">
            <ArrowDown size={16}/> {discountPercentage}%
          </Badge>
        )}
      </div>
    </div>
   );
}
 
export default ProductInfo;