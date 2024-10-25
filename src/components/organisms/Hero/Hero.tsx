"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import themeStyles from "@/styles/themes.module.scss";
import styles from "./styles.module.scss";
import { Document } from "@contentful/rich-text-types";
import { ButtonProps } from "@/types/ButtonProps";
import ThemeLogo from "@/components/atoms/themeLogo/themeLogo";
import RichText from "@/components/atoms/RichText/RichText";
import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import SmallThemeLogo from "@/components/atoms/SmallThemeLogo/SmallThemeLogo";

interface HeroProps {
  typeOfHero: string;
  tagline?: string;
  taglineUrl?: string;
  title: string;
  bodyCopy?: Document;
  buttons?: Array<ButtonProps>;
  image?: object;
  theme?: string;
}

const Hero: React.FC<HeroProps> = ({
  typeOfHero,
  title,
  bodyCopy,
  buttons,
  theme,
  tagline,
  taglineUrl,
  image,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const themeClass = theme
    ? themeStyles[theme.replace(/\s/g, "")]
    : themeStyles.Default;
  const typeOfHeroClass = typeOfHero.replace(/\s/g, "");

  if (typeOfHeroClass === "Blankhero") {
    return (
      <div className={styles.hero}>
        <div className={`${styles[typeOfHeroClass]}`}></div>
      </div>
    );
  } else {
    return (
      <div className={`${styles.hero} ${themeClass}`}>
        <div className={`${styles[typeOfHeroClass]} `}>
          <div className={styles.wrapper}>
            <div className={styles.textContent}>
              {tagline &&
                (typeOfHeroClass === "Imagehero" && taglineUrl ? (
                  <a href={taglineUrl} className={styles.tagline}>
                    <div className={styles.taglineIconWrapper}>
                      <SmallThemeLogo theme={theme} width={32} height={32} />

                      <p className={styles.tagline}>{tagline}</p>
                    </div>
                  </a>
                ) : (
                  <div className={styles.taglineWrapper}>
                    {tagline && <p className={styles.tagline}>{tagline}</p>}
                  </div>
                ))}
              <h1 className={styles.title}>{title}</h1>
              {bodyCopy && (
                <div className={styles.richText}>
                  <RichText data={bodyCopy} />
                </div>
              )}
              {buttons && (
                <div className={styles.buttonWrapper}>
                  {buttons.map((buttonItem, index) => (
                    <Button
                      key={index}
                      url={buttonItem.fields.url}
                      external={buttonItem.fields.external}
                      text={buttonItem.fields.label}
                      theme={index === 1 ? "secondary" : "primary-dark"}
                    />
                  ))}
                </div>
              )}
            </div>
            {typeOfHeroClass === "Imagehero" ? (
              image && (
                <div
                  className={`${styles.imageWrapper} ${
                    inView ? styles.animation : ""
                  }`}
                  ref={ref}
                >
                  <Image
                    className={styles.image}
                    alt={`${
                      (image as { fields: { file: { description: string } } })
                        ?.fields?.file.description
                    }`}
                    src={`https:${
                      (image as { fields: { file: { url: string } } })?.fields
                        ?.file.url
                    }`}
                    width={457}
                    height={457}
                  />
                </div>
              )
            ) : (
              <div className={styles.logo}>
                <ThemeLogo theme={theme as string} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Hero;
