"use client";

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
    link: "Image 01", // replace it with path for images
  },
  {
    link: "Image 02",
  },
  {
    link: "Image 03",
  },
];

export default function Slider() {
  const [autoplay] = useState(() =>
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <Carousel plugins={[autoplay]} className="py-2 lg:py-4">
      <CarouselContent className="w-full h-[150px] md:[h-250px] lg:w-[1245px] lg:h-[300px]">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="aspect-square h-full w-full flex items-center justify-center border border-dashed border-dark/20 rounded-md text-dark">
              {image.link}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:block" />
      <CarouselNext className="hidden lg:block" />
    </Carousel>
  );
}
