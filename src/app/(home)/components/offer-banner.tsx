import Image, { ImageProps } from "next/image";

const OfferBanner = ({alt, ...props}: ImageProps) => {
  return ( 
    <Image
        width={0}
        height={0}
        className="w-full h-auto rounded-xl"
        sizes="100vw"
        alt={alt}
        {...props}
      />
   );
}
 
export default OfferBanner;