"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/115_BLACK_FRIDAY.jpg"
        width={0}
        height={0}
        alt="desconto de black friday"
        className="w-full h-auto rounded-xl"
        sizes="100vw"
      />
    </div>
  );
}
