import React from "react";

import { services } from "@/lib/data";
import SectionHeading from "./section-heading";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  return (
    <section className="md:mt-12 mt-4">
      <div className="flex flex-col items-center justify-center md:gap-12 gap-4">
        <SectionHeading>Szolgáltatások</SectionHeading>
        <div className="md:px-12 px-4">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <Services {...service} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

type ServiceProps = (typeof services)[number];

function Services({ title, description, infoTitle, infoText }: ServiceProps) {
  return (
    <Card className="max-w-[80rem] md:mb-12 mb-8 opacity-80 shadow-lg shadow-black">
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
  );
}

export default ServicesSection;
