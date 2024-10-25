import { MenuItem } from "@/interfaces/MenuItemProps";
import Link from "next/link";
import React, { useContext } from "react";
import { MobileMenuSection } from "./MobileMenuSection/MobileMenuSection";
import styles from "./styles.module.scss";
import Button from "@/components/atoms/Button/Button";
import Accordion from "@/components/molecules/Accordion/Accordion";

export interface MobileNavigationProps {
  menu: [MenuItem];
  pricingTitle: string;
  signInTitle: string;
  cta: any;
}

export const MobileNavigation = ({
  menu,
  pricingTitle,
  signInTitle,
  cta,
}: MobileNavigationProps) => {
  const { label, url, type } = cta.fields;

  const navigationLinks = menu.map((menuItem, index) => {
    const { fields } = menuItem;
    return (
      <MobileMenuSection
        key={fields.name}
        menuItem={fields}
        index={index}
      ></MobileMenuSection>

    );
  });
  return (
    <nav>
      <div className={styles.mobileNavigation}>
        <Accordion header={true}>
          {navigationLinks}
        </Accordion>
      </div>
      <div className={styles.demoButton}>
        {cta && (
          <Button
            text={label}
            url={url}
          ></Button>
        )}
      </div>
      <div className={styles.contactUs}>
        <a href="/pricing">
          <p>{pricingTitle}</p>
        </a>
      </div>
    </nav>
  );
};
