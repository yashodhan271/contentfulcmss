import React from "react";
import { Document } from "@contentful/rich-text-types";
import styles from "./styles.module.scss";
import { ButtonProps } from "@/types/ButtonProps";
import PricingCardItem from "@/components/molecules/PricingCardItem/PricingCardItem";

interface PricingCardsProps {
  firstCardTitle: string;
  firstCopy: string;
  firstCta: ButtonProps;
  firstBenefitsTitle: string;
  firstBenefits: Document;
  secondCardTitle: string;
  secondCopy: string;
  secondCta: ButtonProps;
  secondBenefitsTitle: string;
  secondBenefits: Document;
  thirdCardTitle: string;
  thirdCopy: string;
  thirdCta: ButtonProps;
  thirdBenefitsTitle: string;
  thirdBenefits: Document;
}

const PricingCards: React.FC<PricingCardsProps> = ({
  firstCardTitle,
  firstCopy,
  firstCta,
  firstBenefitsTitle,
  firstBenefits,
  secondCardTitle,
  secondCopy,
  secondCta,
  secondBenefitsTitle,
  secondBenefits,
  thirdCardTitle,
  thirdCopy,
  thirdCta,
  thirdBenefitsTitle,
  thirdBenefits,
}) => {
  const cards = [
    {
      cardTitle: firstCardTitle,
      copy: firstCopy,
      cta: firstCta,
      benefitsTitle: firstBenefitsTitle,
      benefits: firstBenefits,
    },
    {
      cardTitle: secondCardTitle,
      copy: secondCopy,
      cta: secondCta,
      benefitsTitle: secondBenefitsTitle,
      benefits: secondBenefits,
    },
    {
      cardTitle: thirdCardTitle,
      copy: thirdCopy,
      cta: thirdCta,
      benefitsTitle: thirdBenefitsTitle,
      benefits: thirdBenefits,
    },
  ];

  return (
    <div className={styles.pricingCards}>
      {cards.map((card, index) => (
        <PricingCardItem
          key={index}
          cardTitle={card?.cardTitle}
          copy={card?.copy}
          cta={card?.cta}
          benefitsTitle={card?.benefitsTitle}
          benefits={card?.benefits}
        />
      ))}
    </div>
  );
};

export default PricingCards;
