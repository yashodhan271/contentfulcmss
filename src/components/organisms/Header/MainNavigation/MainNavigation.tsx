import { NavigationProps } from "../../../../interfaces/NavigationProps";
import React from "react";
import { MenuSection } from "./MenuSection/MenuSection";
import styles from "./styles.module.scss";

export const MainNavigation = ({ menu }: NavigationProps) => {
  const navigationLinks = menu.map((menuItem) => {
    const { fields } = menuItem;
    return <MenuSection key={fields.name} menuItem={fields}></MenuSection>;
  });

  return (
    <nav>
      <ul className={styles.navBar}>{navigationLinks}</ul>
    </nav>
  );
};
