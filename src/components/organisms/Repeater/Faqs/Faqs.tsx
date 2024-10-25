import React from "react";
import styles from "./styles.module.scss";
import { Document } from "@contentful/rich-text-types";
import Button from "@/components/atoms/Button/Button";
import Accordion from "@/components/molecules/Accordion/Accordion";
import AccordionItem from "@/components/molecules/Accordion/AccordionItem/AccordionItem";
import RichText from "@/components/atoms/RichText/RichText";
import { ButtonProps } from "@/types/ButtonProps";
import { TextColumnItemProps } from "@/types/TextColumnItemProps";

interface FaqsProps {
  title?: string;
  items: Array<TextColumnItemProps>;
  button: ButtonProps;
}

const Faqs: React.FC<FaqsProps> = ({ title, items, button }) => {
  return (
    <div className={styles.faqs}>
     {title && <h4 className={styles.title}>{title}</h4>}
      <div className={styles.accordionContainer}>
        <Accordion faqs={true}>
          {items.map((item, index) => {
            return (
              <AccordionItem
                key={index}
                header={item?.fields?.title}
                headerSize="small"
                type="faqs"
                initialEntered={index === 0}
                hasChevron={true}
              >
                <div className={styles.textContainer}>
                <RichText data={item?.fields?.text as Document} />
                </div>
                {item?.fields?.buttons && item.fields.buttons.length > 0 && (
                  <div className={styles.tertiaryBtn}>
                  <Button
                    text={item.fields.buttons[0].fields.label}
                    url={item.fields.buttons[0].fields.url}
                    theme="tertiary"
                    external={item.fields.buttons[0].fields.external}
                  />
                  </div>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
        {button && (
          <div className={styles.faqsButton}>
          <Button
            text={button.fields.label}
            url={button.fields.url}
            theme="primary-dark"
            external={button.fields.external}
          />
          </div>
        )}
      </div>
    </div>
  );
};

export default Faqs;
