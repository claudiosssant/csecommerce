import { CartProduct } from "@/providers/cart";
import Image from "next/image";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({product}: CartItemProps) => {
  return ( 
    <div className="flex items-center">
      <div className="flex items-center gap-2">
        <div className="bg-accent flex items-center justify-center rounded-lg">
          <Image 
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vh"
            className="w-auto h-auto max-h-[70%] max-w-[80%]"
          />
        </div>
        <div className="flex flex-col">
          <p className="">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="font-bold"> R$ {product.totalPrice.toFixed(2)}</p>
            {product.discountPercentage > 0 &&(
              <p className="opacity-75 line-through text-xs">R$ {product.discountPercentage.toFixed(2)}</p>
            )}
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
   );
}
 
export default CartItem;