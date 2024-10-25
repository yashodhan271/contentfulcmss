import { MenuItem } from "@/interfaces/MenuItemProps";
import React from "react";
import { MobileFooterMenuSection } from "./MobileFooterMenuSection/MobileFooterMenuSection";
import styles from "./styles.module.scss";
import Accordion from "@/components/molecules/Accordion/Accordion";

export interface MobileNavigationProps {
  menu: [MenuItem];
}

export const MobileFooterNavigation = ({ menu }: MobileNavigationProps) => {
  const navigationLinks = menu.map((menuItem) => {
    const { fields } = menuItem;

    return <MobileFooterMenuSection key={fields.name} menuItem={fields} />;
  });

  return (
    <div className={styles.footerNav}>
      <Accordion footer={true}>
        {navigationLinks}
      </Accordion>
    </div>
  );
};
