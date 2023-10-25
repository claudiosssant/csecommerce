
import Image from "next/image";
import Categories from "./components/products-categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage:{
        gt: 0,
      },
    },
  });
  return (
    <div className="">
      <Image
        src="/6026286.jpg"
        width={0}
        height={0}
        alt="24 hours online offer, blackfriday, up to 70% off discount, use the code blackfridayoffer and shop now"
        className="w-full h-auto rounded-xl"
        sizes="100vw"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="mb-3 font-bold uppercase pl-5">Ofertas</p>
        <ProductList products={deals} />
      </div>
      <Image
        src="/5972157.jpg"
        width={0}
        height={0}
        alt="24 hours online offer, blackfriday, up to 70% off discount, use the code blackfridayoffer and shop now"
        className="w-full h-auto rounded-xl"
        sizes="100vw"
      />
    </div>
  );
}
