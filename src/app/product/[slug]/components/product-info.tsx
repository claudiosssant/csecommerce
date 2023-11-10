"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, Truck } from "react-feather";

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
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev -1));
  };
  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };
  
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
      {discountPercentage > 0 && (
        <p className="opacity-75 text-sm line-through">{Number(basePrice).toFixed(2)}</p>
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
        <p className="opacity-60 text-sm text-justify">{description}</p>
      </div>

      <Button className="mt-8 mb-10 uppercase font-bold">
        Adicionar ao carrinho
      </Button>
      
    </div>
   );
}
 
export default ProductInfo;