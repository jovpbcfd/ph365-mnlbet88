"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    link: "/img/home/slider/ph365-image-slide-01.webp",
  },
  {
    link: "/img/home/slider/ph365-image-slide-02.webp",
  },
  {
    link: "/img/home/slider/ph365-image-slide-03.webp",
  },
  {
    link: "/img/home/slider/ph365-image-slide-04.webp",
  },
  {
    link: "/img/home/slider/ph365-image-slide-05.webp",
  },
  {
    link: "/img/home/slider/ph365-image-slide-06.webp",
  },
];

export default function Slider() {
  const [autoplay] = useState(() =>
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <Carousel plugins={[autoplay]} className="group py-2 lg:py-4">
      <CarouselContent className="w-full h-[150px] md:[h-250px] lg:w-[1245px] lg:h-[300px]">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="aspect-square h-full w-full flex items-center justify-center border border-dashed border-dark/20 rounded-lg cursor-pointer text-dark">
              <Image
                src={image.link}
                width={1245}
                height={300}
                alt={image.link}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity lg:block" />
      <CarouselNext className="hidden cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity lg:block" />
    </Carousel>
  );
}
