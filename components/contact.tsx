"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import ContactForm from "./contact-form";

const ContactSection = () => {
  const { ref } = useSectionInView("Kapcsolat", 0.9);
  return (
    <section
      ref={ref}
      className="md:mt-12 mt-4 md:scroll-mt-20 scroll-mt-16"
      id="kapcsolat"
    >
      <div className="flex flex-col items-center justify-center md:gap-12 gap-4 w-full">
        <SectionHeading>Kapcsolat</SectionHeading>
        <div className="max-w-[80rem] px-8 text-justify md:text-lg text-sm">
          <p>
            Bármilyen kérdése van, írjon nekünk! Árajánlat kéréséhez kérjük,
            töltse ki a kért adatokat és a megadott elérhetőségek egyikén
            hamarosan felvesszük Önnel a kapcsolatot.
          </p>
          <p className="mt-4 md:mt-8">
            Nem szeretnénk és nem is tudunk a legolcsóbbak lenni ezen a
            szolgáltatási területen és ezáltal gyorsan fluktuálódó ügyfélkörre
            szert tenni. Az olcsóság gyakorta nem párosul a minőséggel.
          </p>
          <p className="mt-4 md:mt-8">
            Számunkra első a minőség és célunk a 100%-ban elégedetten visszatérő
            ügyfél!
          </p>
        </div>
        <div className="w-full max-w-[80rem] px-8 text-justify md:text-lg text-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
