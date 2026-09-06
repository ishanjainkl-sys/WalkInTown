import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel plugins={[plugin.current]} className="w-full relative mx-auto">
      <CarouselContent>
        {carouselDataArray.map((carouselData, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className=" relative flex h-screen items-center justify-center p-6">
                  <img
                    src={`/${carouselData.image}`}
                    className="absolute top-0 h-full w-full left-0 object-cover"
                    alt=""
                  />
                  <div className=" z-10 flex container justify-center sm:px-6 md:px-4 flex-col">
                    <p className="text-4xl md:text-5xl uppercase font-semibold text-white">
                      {carouselData.title}
                    </p>
                    <p className="text-6xl md:text-7xl uppercase font-bold text-primary-red">
                      {carouselData.subtitle}
                    </p>
                    <p className="text-4xl md:text-5xl uppercase font-semibold text-white">
                      {carouselData.subtitle2}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

const carouselDataArray = [
  {
    image: "hero-bg.png",
    title: "weekend sale",
    subtitle: "buy now",
    subtitle2: "upto 70% off",
  },
  {
    image: "hero-bg.png",
    title: "weekend sale",
    subtitle: "buy now",
    subtitle2: "upto 60% off",
  },
  {
    image: "hero-bg.png",
    title: "weekend sale",
    subtitle: "buy now",
    subtitle2: "upto 75% off",
  },
];
