import React from "react";

import { services } from "@/lib/data";
import SectionHeading from "./section-heading";
import Services from "./services";

const ServiceSection = () => {
  return (
    <section
      className="md:mt-12 mt-4 md:scroll-mt-20 scroll-mt-16"
      id="szolgaltatasok"
    >
      <div className="flex flex-col items-center justify-center md:gap-12 gap-4">
        <SectionHeading>Szolgáltatások</SectionHeading>
        <div className="md:px-12 px-4 gap-4">
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

export default ServiceSection;
