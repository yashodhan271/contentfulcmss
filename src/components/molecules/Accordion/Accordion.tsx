import React, { useState } from "react";
import { Accordion as ReactAccordion } from "@szhsin/react-accordion";

interface AccordionProps {
  children: any;
  faqs?: boolean;
  footer?: boolean;
  header?:boolean;
}

const Accordion: React.FC<AccordionProps> = ({ children, faqs, footer, header }) => {
  return (
    <div>
      <ReactAccordion
        transition
        transitionTimeout={100}
        initialEntered
        allowMultiple={faqs || footer || header ? false : true}
      >
        {children}
      </ReactAccordion>
    </div>
  );
};

export default Accordion;
