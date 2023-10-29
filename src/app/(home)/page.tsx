import Image from "next/image";
import Categories from "./components/products-categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/list";
import SectionTitle from "./components/section-title";
import OfferBanner from "./components/offer-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });
  return (
    <div className="flex flex-col gap-8 py-8">
      <OfferBanner
        src="/6026286.jpg"
        alt="24 hours online offer, blackfriday, up to 70% off discount, use the code blackfridayoffer and shop now"
      />
      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>
      <OfferBanner
        src="/5972157.jpg"
        alt="24 hours online offer, blackfriday, up to 70% off discount, use the code blackfridayoffer and shop now"
      />
      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
      <OfferBanner
        src="/5999432.jpg"
        alt="24 hours online offer, blackfriday, up to 70% off discount, use the code blackfridayoffer and shop now"
      />
      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
