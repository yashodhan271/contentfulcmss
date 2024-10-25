"use client";

import { MenuItem, MenuItemProps } from "@/interfaces/MenuItemProps";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./styles.module.scss";

export const MenuSection = ({ menuItem }: MenuItemProps) => {
  const pathname = usePathname();
  const parentSlug = menuItem.slug || null;

  if (menuItem.subMenu) {
    const subNav = menuItem.subMenu.map((subMenu) => {
      let randomId = `menu__${(Math.random() + "").split(".")[1]}`;

      if (subMenu.fields.navigationLinks) {
        const subMenuLinks = subMenu.fields.navigationLinks.map(
          (link: MenuItem) => {
            return createLink(parentSlug, link, pathname);
          }
        );
        return (
          <div key={randomId} className={styles.subMenuSection}>
            <p className={styles.subMenuName}>{subMenu.fields.name}</p>
            <div className={styles.linksContainer}>{subMenuLinks}</div>
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
    const path = parentSlug
      ? `/${parentSlug}/${menuItem.page?.fields.slug}`
      : `/${menuItem.page?.fields.slug || menuItem.slug}`;
    return (
      <li className={styles.menuItem}>
        {menuItem.page ? (
          <Link href={path}>
            <p className={styles.menuItemName}>{menuItem.name}</p>
          </Link>
        ) : (
          <p className={styles.menuItemName}>{menuItem.name}</p>
        )}
        <div className={styles.subMenu}>{subNav}</div>
      </li>
    );
  } if (menuItem.isExternalLink){
    return (
      <li className={`${styles.menuItem}  ${styles.externalLink}`}>
        <a href={menuItem.externalUrl} target="_blank">
          <p className={`${styles.menuItemName}  ${styles.externalLink}`}>{menuItem.name}</p>
        </a>
      </li>
    )
  }
  else {
    const slug = menuItem.slug;
    return (
      <li className={styles.menuItem}>
        <Link prefetch={false} href={`/${slug}`}>
          <p className={styles.menuItemName}>{menuItem.name}</p>
        </Link>
      </li>
    );
  }
};

const createLink = (
  parentSlug: string | null,
  link: MenuItem,
  currentRoute: string
) => {
  const { fields } = link;
  const randomId = `menu__${(Math.random() + "").split(".")[1]}`;

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
