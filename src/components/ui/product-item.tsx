import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="flex h-[170px] w-[156px] items-center rounded-lg bg-gray-200">
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
      </div>
      <div>
        <p className=" w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
          {product.name}
        </p>
        <div className="flex items-center justify-center gap-2">
          {product.discountPercentage > 0 && (
            <>
            <p className="font-semibold text-sm">R$ {product.totalPrice.toFixed(2)}</p>

            <p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice).toFixed(2)}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
