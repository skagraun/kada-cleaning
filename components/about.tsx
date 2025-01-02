"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

import SectionHeading from "./section-heading";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.25 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="md:mt-12 mt-4 md:scroll-mt-20 scroll-mt-16"
      id="rolunk"
    >
      <div className="flex flex-col items-center justify-center md:gap-12 gap-4">
        <SectionHeading>Rólunk</SectionHeading>
        <p className="max-w-[80rem] px-8 text-justify md:text-lg text-sm">
          A <span className="text-blue-500 font-semibold">KaDa Cleaning</span>
          -nél büszkék vagyunk arra, hogy ügyfeleink egyedi igényeihez igazodó
          csúcsminőségű takarítási szolgáltatásokat nyújtunk. Tapasztalt
          szakemberekből álló elkötelezett csapatunkkal gondoskodunk arról, hogy
          minden, amit kitakarítunk, makulátlan, friss és hívogató legyen. A
          környezetbarát termékek és technikák alkalmazása melletti
          elkötelezettségünk garantálja a családok és háziállatok biztonságos
          környezetét, miközben kivételes eredményeket biztosít. Legyen szó
          lakossági, kereskedelmi vagy speciális takarítási szolgáltatásokról,
          minden feladatban a kiválóságra törekszünk, bizalmon és elégedettségen
          alapuló tartós kapcsolatokat építve ki. Bízza ránk a takarítást, hogy
          Ön arra koncentrálhasson, ami igazán számít!
        </p>
      </div>
    </motion.section>
  );
};

export default AboutSection;
