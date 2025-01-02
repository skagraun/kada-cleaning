"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

import { useSectionInView } from "@/lib/hooks";
import { type CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import carouselImg01 from "@/public/heroesImg/001.png";
import carouselImg02 from "@/public/heroesImg/002.png";
import carouselImg03 from "@/public/heroesImg/003.png";

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const { ref } = useSectionInView("Kezdőlap");

  return (
    <section ref={ref} id="kezdolap" className="scroll-mt-96">
      <div className="flex items-center justify-center">
        <div className="relative w-full md:pt-0 pt-[3.5rem]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.7,
            }}
          >
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
            >
              <CarouselContent>
                <CarouselItem className="w-full md:h-[800] h-[200] flex justify-center items-center sm:items-start overflow-x-auto overflow-y-hidden">
                  <Image
                    src={carouselImg01}
                    alt="Image-01"
                    width={2400}
                    height={800}
                  />
                </CarouselItem>
                <CarouselItem className="w-full md:h-[800] h-[200] flex justify-center items-center sm:items-start overflow-x-auto overflow-y-hidden">
                  <Image
                    src={carouselImg02}
                    alt="Image-02"
                    width={2400}
                    height={800}
                  />
                </CarouselItem>
                <CarouselItem className="w-full md:h-[800] h-[200] flex justify-center items-center sm:items-start overflow-x-auto overflow-y-hidden">
                  <Image
                    src={carouselImg03}
                    alt="Image-03"
                    width={2400}
                    height={800}
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            className="absolute md:top-80 top-24 md:left-24 left-6"
          >
            <div>
              <h2 className="md:text-6xl text-xl font-semibold text-amber-400 text-left drop-shadow-[0_8.2px_8.2px_rgba(0,0,0,1)]">
                Irodaházak, társasházak takarítása
              </h2>
            </div>
            <Button
              asChild
              className="md:mt-7 mt-2 uppercase md:text-lg text-sm md:py-8 md:px-6 md:tracking-widest tracking-wider"
            >
              <Link href={"/#kapcsolat"}>Kérjen ajánlatot</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
