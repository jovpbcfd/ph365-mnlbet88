"use client";

import Image from "next/image";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { link: "/img/investment.webp" },
  { link: "/img/download.webp" },
  { link: "/img/bonus.webp" },
];

export default function Promotion() {
  const [autoplay] = useState(() =>
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <>
      <div className="relative w-full max-w-xs mx-auto group cursor-pointer border border-white/20 p-2">
        <Carousel
          plugins={[autoplay]}
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="horizontal"
          className="w-full h-[200px] rounded-md"
        >
          <CarouselContent className="-mt-1 h-[200px]">
            {images.map((item, index) => (
              <CarouselItem key={index} className="pt-1 basis-full">
                <div className="p-1 aspect-square h-[200px] w-full flex items-center justify-center text-white">
                  <Image
                    src={item.link}
                    width={320}
                    height={200}
                    alt="Banner"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" />
          <CarouselNext className="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" />
        </Carousel>
      </div>
    </>
  );
}
