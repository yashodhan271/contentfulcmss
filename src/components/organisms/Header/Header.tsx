'use client';

import { MenuItem } from '@/interfaces/MenuItemProps';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/atoms/Button/Button';
import { MainNavigation } from './MainNavigation/MainNavigation';
import { MobileNavigation } from './MainNavigation/MobileNavigation/MobileNavigation';
import { usePathname, useRouter } from 'next/navigation';
import { SearchInput } from '@/components/atoms/SearchInput/SearchInput';

interface HeaderProps {
  headerLogo: any;
  headerCommonLogo: any;
  pricingTitle: string;
  signInTitle: string;
  portalUrl: string;
  menu: [MenuItem];
  cta: any;
}

const Header: React.FC<HeaderProps> = ({ headerLogo, headerCommonLogo, pricingTitle, signInTitle, portalUrl, menu, cta }) => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);
  const [scrollAway, setScrollAway] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isSearchActive, setSearchActive] = useState(false);
  const pathname = usePathname();
  const isProductPage = pathname.includes('/products');
  const router = useRouter();

  useEffect(() => {
    history.scrollRestoration = 'manual'
  }, []);

  useEffect(() => {
    if (isMobileNavActive || isSearchActive) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMobileNavActive, isSearchActive]);

  useEffect(() => {
    let prevScrollpos = window?.pageYOffset;

    function handleScroll() {
      setIsAtTop(window.scrollY === 0);

      const currentScrollPos = window.pageYOffset;
      const scrollDifference =
        Math.abs(prevScrollpos) - Math.abs(currentScrollPos); // negative result means scroll down, positive, up
      const scrollDirection = scrollDifference >= 0 ? "up" : "down";

      const scrollDiffAbsolute = Math.abs(scrollDifference);
      if (scrollDiffAbsolute > 10 && window.scrollY > 250) {
        // we scrolled more than 10 pixels
        if (scrollDirection === "up") {
          // show
          setScrollAway(false);
        } else {
          // hide
          setScrollAway(true);
        }
        prevScrollpos = currentScrollPos;
      }
      if (window.pageYOffset < 20) {
        // negative safari scroll, force show
        setScrollAway(false);
        prevScrollpos = currentScrollPos;
      }
      const pageTotalLength = Math.round(
        document.body.offsetHeight - window.innerHeight
      );
      if (window.pageYOffset >= pageTotalLength) {
        // negative safari scroll, force hide
        setScrollAway(true);
        prevScrollpos = currentScrollPos;
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [isAtTop, scrollAway]);
  const toggleMobileNav = () => {
    setMobileNavActive((current) => !current);
  };

  const toggleSearch = () => {
    setSearchActive((current) => !current);
  };

  const goToSearchResults = (e: any) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    window.location.href = `/search?query=${encodeURIComponent(query)}`;
  }

  const { label, url } = cta.fields;
  return (
    <header className={`${styles.header} ${scrollAway && styles.scrollAway} ${isAtTop ? styles.scrollOff : ""
      }`}>
      <div className={`${styles.desktop} ${!isAtTop && styles.scrollingHeader} ${isSearchActive && styles.searchActive}`}>
        <div className={styles.desktopWrapper}>
          <div className={styles.links}>
            <Link href="/pricing" className={styles.link}>{pricingTitle}</Link>
            <a href={portalUrl} target="_blank" className={styles.link}>{signInTitle}</a>
          </div>
          <div className={styles.nav}>
            <Link href="/">
              {isProductPage && <Image alt="header-common-logo" src={`https:${headerCommonLogo}`} width={260} height={36}></Image>}
              {!isProductPage && <Image alt="header-logo" src={`https:${headerLogo}`} width={260} height={36}></Image>}
            </Link>
            <div className={styles.navAndButton}>
              <MainNavigation menu={menu} />
              <div className={styles.searchIcon}>
                <Image alt="search" src={"/icons/search.svg"} width={24} height={24} onClick={toggleSearch}></Image>
              </div>
              <Button text={label} url={url}></Button>
            </div>
          </div>
        </div>
        <div className={`${styles.search}  ${isSearchActive && styles.active}`}>
          <SearchInput submit={goToSearchResults} />
        </div>
      </div>
      <div className={styles.mobile}>
        <div
          className={`${styles.mobileHeader} ${!isAtTop && styles.scrollingHeader} ${isMobileNavActive ? styles.mobileHeaderActivated : ""
            }`}
        >
          <div className={styles.headerLogo}>
            <Link href="/">
              {isProductPage && <Image alt="header-common-logo" src={`https:${headerCommonLogo}`} width={208} height={29}></Image>}
              {!isProductPage && <Image alt="header-logo" src={`https:${headerLogo}`} width={208} height={29}></Image>}
            </Link>
          </div>
          <div className={styles.searchAndNav}>
            <div className={`${isMobileNavActive ? styles.hidden : ""}`}>
              <div className={styles.searchIcon}>
                <Image alt="search" src={"/icons/search.svg"} width={24} height={24} onClick={toggleSearch}></Image>
              </div>
            </div>
            <div className={styles.hamburgerMenuContainer}>
              <Image
                className={`${isMobileNavActive ? styles.hidden : styles.hamburgerMenu
                  }`}
                alt="hamburger-menu"
                src={"/icons/hamburger-menu.svg"}
                width={24}
                height={24}
                onClick={toggleMobileNav}
              ></Image>
            </div>

            <Image
              className={`${styles.closeBtn} ${isMobileNavActive ? "" : styles.hidden
                }`}
              alt="close_btn"
              src="/icons/exit.svg"
              width={32}
              height={32}
              onClick={toggleMobileNav}
            />
          </div>
        </div>

        <div
          className={`${isMobileNavActive ? styles.active : ""} ${styles.mobileNav
            }`}
        >
          <MobileNavigation
            menu={menu}
            pricingTitle={pricingTitle}
            signInTitle={signInTitle}
            cta={cta}
          ></MobileNavigation>
        </div>
        <div
          className={`${isSearchActive ? styles.active : ""} ${styles.mobileSearch
            }`}
        >
          <div className={styles.headerAndClose}>
            <h5>Search</h5>
            <Image
              alt="close_btn"
              src="/icons/exit.svg"
              width={32}
              height={32}
              onClick={toggleSearch}
            />
          </div>
          <div className={styles.input}>
            <SearchInput submit={goToSearchResults} />
          </div>
        </div>
      </div>
      {isSearchActive && <div className={styles.overlay} onClick={toggleSearch}></div>}

    </header>
  );
};

export default Header;