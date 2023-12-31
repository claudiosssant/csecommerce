import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown } from "react-feather";
import Link from "next/link";
import DiscountBadge from "./discount-badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col gap-4 mt-8">
        <div className="relative flex h-full w-full items-center rounded-lg bg-gray-200">
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
          <DiscountBadge className="absolute left-3 top-3">
            {product.discountPercentage}
          </DiscountBadge>
        )}
        </div>

        <div className="flex flex-col gap-1">
          <p className=" w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold">
            {product.name}
          </p>
          <div className="flex items-center justify-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                  R$ {product.totalPrice.toFixed(2)}
                </p>

                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                R$ {product.basePrice.toFixed(2)}
              </p>
            )}
            ;
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
