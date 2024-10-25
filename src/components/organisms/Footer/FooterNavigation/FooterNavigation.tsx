import { NavigationProps } from "@/interfaces/NavigationProps";
import React from "react";
import { FooterMenuSection } from "./FooterMenuSection/FooterMenuSection";
import styles from "./styles.module.scss";

export const FooterNavigation = ({ menu }: NavigationProps) => {
  const navigationLinks = menu.map((menuItem) => {
    const { fields } = menuItem;
    return <FooterMenuSection key={fields.name} menuItem={fields} />;
  });

  return (
    <div>
      <div className={styles.footerNav}>{navigationLinks}</div>
    </div>
  );
};
