import { MenuItem, MenuItemProps } from "@/interfaces/MenuItemProps";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import AccordionItem from "@/components/molecules/Accordion/AccordionItem/AccordionItem";

export const MobileMenuSection = ({ menuItem, index }: MenuItemProps) => {
  const pathname = usePathname();
  const parentSlug = menuItem.slug || null;

  if (menuItem.subMenu) {
    const subNav = menuItem.subMenu.map((subMenu) => {
      let randomId = `mobilemenu__${(Math.random() + "").split(".")[1]}`;

      if (subMenu.fields.navigationLinks) {
        const subMenuLinks = subMenu.fields.navigationLinks.map(
          (link: MenuItem) => {
            return createLink(parentSlug, link, pathname);
          }
        );
        return (
          <div key={randomId} className={styles.subMenuSection}>
            <p className={styles.subMenuName}>{subMenu.fields.name}</p>
            {subMenuLinks}
          </div>
        );
      }
      if (subMenu.fields.isExternalLink) {
        return (
          <a key={randomId} href={subMenu.fields.externalUrl} target="_blank">
            <p className={styles.link}>{subMenu.fields.name}</p>
          </a>
        );
      }
      return createLink(parentSlug, subMenu, pathname);
    });
    return (
      <AccordionItem
        header={menuItem.name}
        hasPlusMinus
        type="header"
        initialEntered={index === 0}
      >
        <div className={styles.menuItem}>
          <div className={styles.subMenu}>{subNav}</div>
        </div>
      </AccordionItem>
    );
  } else {
    return (
      <a
        className={styles.menuItem}
        href={menuItem.externalUrl ? menuItem.externalUrl : menuItem.slug}
      >
        <p className={`${styles.menuItem}  ${styles.noSubItems}`}>{menuItem.name}</p>
      </a>
    );
  }
};

const createLink = (
  parentSlug: string | null,
  link: MenuItem,
  currentRoute: string
) => {
  const { fields } = link;
  const randomId = `mobile_menu_${(Math.random() + "").split(".")[1]}`;

  const path = parentSlug
    ? `/${parentSlug}/${fields?.slug}`
    : `/${fields?.slug}`;
  return (
    <a key={randomId} href={`${path}`}>
      <p
        className={`${styles.link} ${
          path === currentRoute && styles.currentPage
        }`}
      >
        {fields.name}
      </p>
    </a>
  );
};
