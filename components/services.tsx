"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

import { services } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type ServiceProps = (typeof services)[number];

export default function Services({
  title,
  description,
  infoTitle,
  infoText,
}: ServiceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.25 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="md:mb-12 mb-8 last:mb-0"
    >
      <Card className="max-w-[80rem] opacity-80 md:shadow-xl shadow-sm shadow-black">
        <CardHeader>
          <CardTitle className="md:text-2xl text-base">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="md:text-lg text-sm">{description}</p>
          <h4 className="md:text-base text-sm pt-4 font-medium italic">
            {infoTitle}
          </h4>
          <h4 className="md:text-base text-sm">{infoText}</h4>
        </CardContent>
      </Card>
    </motion.div>
  );
}
