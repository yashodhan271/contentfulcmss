"use client";

import { MenuItem } from "@/interfaces/MenuItemProps";
import Image from "next/image";
import styles from "./styles.module.scss";
import { FooterNavigation } from "./FooterNavigation/FooterNavigation";
import Link from "next/link";
import { MobileFooterNavigation } from "./FooterNavigation/MobileFooterNavigation/MobileFooterNavigation";

export interface FooterProps {
  logo: string;
  menu: [MenuItem];
  facebookIcon?: string;
  facebookUrl?: string;
  youtubeIcon?: string;
  youtubeUrl?: string;
  linkedInIcon?: string;
  linkedInUrl?: string;
  links: any;
  copyright: string;
}

export const Footer = ({
  logo,
  menu,
  facebookIcon,
  facebookUrl,
  youtubeIcon,
  youtubeUrl,
  linkedInIcon,
  linkedInUrl,
  links,
  copyright,
}: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.topSection}>
          <Image
            alt="footerLogo"
            src={`https:${logo}`}
            width={274}
            height={37}
            className={styles.footerLogo}
          />
          <div className={styles.socialLinks}>
            {facebookIcon && facebookUrl && (
              <a href={facebookUrl} target="_blank">
                <Image
                  alt="facebook"
                  src={`https:${facebookIcon}`}
                  width={40}
                  height={40}
                />
              </a>
            )}
            {youtubeUrl && (
              <a href={youtubeUrl} target="_blank">
                <Image
                  alt="youtube"
                  src={`https:${youtubeIcon}`}
                  width={40}
                  height={40}
                />
              </a>
            )}
            {linkedInUrl && linkedInIcon && (
              <a href={linkedInUrl} target="_blank">
                <Image
                  alt="linkedin"
                  src={`https:${linkedInIcon}`}
                  width={40}
                  height={40}
                />
              </a>
            )}
          </div>
        </div>
        <div className={styles.desktop}>
          <FooterNavigation menu={menu} />
        </div>
        <div className={styles.mobile}>
          <MobileFooterNavigation menu={menu} />
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.links}>
            {links.map((link: any, i: number) => {
              return (
                <Link key={i} href={`${link.fields.slug}`}>
                  <p>{link.fields?.name}</p>
                </Link>
              );
            })}
          </div>
          <p className={styles.copyright}>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};
