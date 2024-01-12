import { Key, ShoppingCart } from "react-feather";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";

const Cart = () => {
  const { products } = useContext(CartContext);
  return ( 
    <div className="">
      <Badge className="w-fit border-2 gap-1 px-3 py-1 text-base uppercase">
        <ShoppingCart size={16} />
        Carrinho
      </Badge>
      {products.map((product) => (
        <CartItem key={product.id} product={computeProductTotalPrice(product as any) as any}/>
      ))}
    </div>
   );
};
 
export default Cart;