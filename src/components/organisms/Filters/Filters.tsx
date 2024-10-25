"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";
import Button from "@/components/atoms/Button/Button";
import filterIcon from "../../../../public/icons/filter.svg";
import closeIcon from "../../../../public/icons/exit.svg";
import Image from "next/image";
import FilterResults from "./FilterResults/FilterResults";
import FilterList from "./FilterList/FilterList";

interface FiltersProps {
  heading: string;
  filters: any;
}

const Filters: React.FC<FiltersProps> = ({ heading, filters }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [checkedTags, setCheckedTags] = useState<
    { key: string; label: string }[]
  >([]);

  const [isScrolledPast, setIsScrolledPast] = useState(false);

  const filterButtonRef = useRef<HTMLDivElement>(null);
  const [buttonPosition, setButtonPosition] = useState<number | null>(null);

  const mobileNavHeight = 96;
  
  useEffect(() => {
    if (filterButtonRef.current) {
      const position = filterButtonRef.current.getBoundingClientRect().top + window.scrollY - mobileNavHeight;
      setButtonPosition(position);
    }
  }, []);
  
  useEffect(() => {
    const checkScroll = () => {
      if (buttonPosition !== null) {
        setIsScrolledPast(window.scrollY >= buttonPosition);
      }
    };
  
    window.addEventListener("scroll", checkScroll);
  
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [buttonPosition]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCheckedTagsChange = (
    newCheckedTags: { key: string; label: string }[]
  ) => {
    setCheckedTags(newCheckedTags);
  };

  const removeFilter = (key: string) => {
    const newCheckedTags = checkedTags.filter((tag) => tag.key !== key);
    setCheckedTags(newCheckedTags);
  };

  const clearFilters = () => {
    setCheckedTags([]);
  };

  return (
    <div className={styles.filters} id="filtersHeader">
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.desktopFilter}>
        <div className={styles.filtersContainer}>
          <div className={styles.filterContainer}>
            <div className={styles.filterSection}>
              <p className={styles.heading}>Applied filters</p>
              <div className={styles.appliedFilters}>
                {checkedTags.map((tag, index) => {
                  return (
                    <button
                      key={index}
                      className={styles.appliedFilter}
                      onClick={() => removeFilter(tag.key)}
                    >
                      <p>{tag.label}</p>
                      <div className={styles.close}></div>
                    </button>
                  );
                })}
              </div>
              <div
                style={{ paddingTop: "24px" }}
                className={styles.clearFilters}
                onClick={clearFilters}
              >
                Clear filters
              </div>
            </div>
            <FilterList
              data={filters}
              onCheckedTagsChange={handleCheckedTagsChange}
              checkedTags={checkedTags}
            />
          </div>
          <FilterResults checkedTags={checkedTags} />
        </div>
        <div className={styles.resultsContainer}></div>
      </div>
      <div className={`${styles.mobileFilter} ${isScrolledPast ? styles.filterCtaFixed : ""}`}>
        <div
          className={`${styles.mobileFilterButton} ${
            isScrolledPast ? styles.fixedButton : ""
          }`}
          ref={filterButtonRef}
        >
          <Button
            iconSrc={filterIcon}
            text="Filters"
            action="button"
            theme="primary-dark"
            onClick={toggleMenu}
          ></Button>
        </div>
        <div className={styles.appliedFilters}>
          {checkedTags.map((tag, index) => {
            return (
              <button
                key={index}
                className={styles.appliedFilter}
                onClick={() => removeFilter(tag.key)}
              >
                <p>{tag.label}</p>
                <div className={styles.close}></div>
              </button>
            );
          })}
        </div>
        <div className={styles.clearFilters} onClick={clearFilters}>
          Clear filters
        </div>
        <FilterResults checkedTags={checkedTags} />
      </div>
      {isMenuOpen && (
        <div className={` ${styles.filterMenu} ${isMenuOpen && styles.active}`}>
          <div className={styles.filterMenuOverlay} onClick={toggleMenu}></div>
          <div className={styles.filterMenuSideMenu}>
            <div className={styles.filterMenuHeader}>
              <h3>Filters</h3>
              <Image
                src={closeIcon}
                alt="close-filter-menu"
                width={32}
                height={32}
                onClick={toggleMenu}
              />
            </div>
            <div className={styles.filterList}>
              <FilterList
                data={filters}
                onCheckedTagsChange={handleCheckedTagsChange}
                checkedTags={checkedTags}
              />
            </div>
            <div className={styles.filterFooter}>
              <div className={styles.clearFilters} onClick={clearFilters}>
                Clear filters
              </div>
              <Button
                text="View results"
                theme="primary-dark"
                action="button"
                onClick={toggleMenu}
              ></Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
