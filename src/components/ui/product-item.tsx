import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown } from "react-feather";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[156px] flex-col gap-4 mt-8">
      <div className="relative flex h-[170px] w-[156px] items-center rounded-lg bg-gray-200">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-auto"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />
      {product.discountPercentage > 0 && (
        <Badge className="absolute left-3 top-3 px-2 pt-[2px]">
          <ArrowDown size={16}/> {product.discountPercentage}%
        </Badge>
      )}
      </div>

      <div className="flex flex-col gap-1">
        <p className=" w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold">
          {product.name}
        </p>
        <div className="flex items-center justify-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="text-sm font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>

              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold">
              R$ {product.basePrice.toFixed(2)}
            </p>
          )}
          ;
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
