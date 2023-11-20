"use client"

import Image from "next/image";
import { useState } from "react";

interface ProductsImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductsImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  }

  return (
    <div className="flex flex-col">
      <div className="h-[380px] flex w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex items-center justify-center rounded-lg bg-accent h-[100px] w-[110px] mt-8 px-5
              ${
                imageUrl === currentImage && 'border border-solid border-primary'
              }
            `}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
