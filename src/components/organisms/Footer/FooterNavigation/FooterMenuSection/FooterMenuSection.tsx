import { MenuItem, MenuItemProps } from "@/interfaces/MenuItemProps";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

export const FooterMenuSection = ({ menuItem }: MenuItemProps) => {
  const pathname = usePathname();

  const parentSlug = menuItem.slug || null;

  if (menuItem.subMenu) {
    const subNav = menuItem.subMenu.map((subMenu) => {
      let randomId = `footer__${(Math.random() + "").split(".")[1]}`;

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
      <div className={styles.menuItem}>
        <h6>{menuItem.name}</h6>
        <div className={styles.subMenu}>{subNav}</div>
      </div>
    );
  }
};

const createLink = (
  parentSlug: string | null,
  link: MenuItem,
  currentRoute: string
) => {
  const { fields } = link;
  const randomId = `footer__${(Math.random() + "").split(".")[1]}`;

  const path = parentSlug
    ? `/${parentSlug}/${fields?.slug}`
    : `/${fields?.slug}`;
  return (
    <Link key={randomId} prefetch={false} href={`${path}`}>
      <p
        className={`${styles.link} ${
          path === currentRoute && styles.currentPage
        }`}
      >
        {fields.name}
      </p>
    </Link>
  );
};
