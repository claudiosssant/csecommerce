"use client";
import Image from "next/image";
import Categories from "./components/products-categories";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/115_BLACK_FRIDAY.jpg"
        width={0}
        height={0}
        alt="24 hours online offer, blackfriday, up to 70% off discount, use the code blackfridayoffer and shop now"
        className="w-full h-auto rounded-xl"
        sizes="100vw"
      />
      <div className="mt-10">
        <Categories />
      </div>
    </div>
  );
}
