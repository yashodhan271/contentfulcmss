import React from "react";
import { Document } from "@contentful/rich-text-types";
import styles from "./styles.module.scss";
import { ButtonProps } from "@/types/ButtonProps";
import Button from "@/components/atoms/Button/Button";
import RichText from "@/components/atoms/RichText/RichText";

interface PricingCardItemProps {
  cardTitle: string;
  copy: string;
  cta: ButtonProps;
  benefitsTitle: string;
  benefits: Document;
}

const PricingCardItem: React.FC<PricingCardItemProps> = ({
  cardTitle,
  copy,
  cta,
  benefitsTitle,
  benefits,
}) => {
  if (!cardTitle || !copy || !cta || !benefitsTitle || !benefits) {
    return null;
  }

  return (
    <div className={styles.pricingCard}>
      <h4 className={styles.cardTitle}>{cardTitle}</h4>
      <p className={styles.bodyCopy}>{copy}</p>
      <Button
        text={cta?.fields?.label}
        external={cta?.fields?.external}
        url={cta?.fields?.url}
        theme={cta?.fields?.type}
      />
      <p className={styles.benefitsTitle}>{benefitsTitle}</p>
      <div className={styles.richText}>
        <RichText data={benefits} />
      </div>
    </div>
  );
};

export default PricingCardItem;
