"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { Product } from "@prisma/client";
import { useContext, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, Truck } from "react-feather";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({product} : ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev -1));
  };
  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCartClick = () => {
    addProductToCart({...product, quantity})
    alert('item adicionado ao carrinho!')
  }
  
  return ( 
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-1">
        <h1 className="text-xl font-bold gap-2">R$ {product.totalPrice.toFixed(2)}</h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>
            {product.discountPercentage}
          </DiscountBadge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="opacity-75 text-sm line-through">{Number(product.basePrice).toFixed(2)}</p>
      )}

      <div className="flex items-center gap-2">
        <Button size="icon" variant="outline" onClick={handleDecreaseQuantityClick}>
          <ArrowLeft size={16}/>
        </Button>
        <span>{quantity}</span>
        <Button size="icon" variant="outline" onClick={handleIncreaseQuantityClick}>
          <ArrowRight size={16} />
        </Button>
      </div>
      <div className="flex flex-col gap-3 mt-8">
        <h3 className="font-bold">Descrição</h3>
        <p className="opacity-60 text-sm text-justify">{product.description}</p>
      </div>

      <Button className="lg:w-1/5 mt-8 mb-10 uppercase font-bold" onClick={handleAddToCartClick}>
        Adicionar ao carrinho
      </Button>
      
    </div>
   );
}
 
export default ProductInfo;