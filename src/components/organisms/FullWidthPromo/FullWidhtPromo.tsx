import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "@/components/atoms/Button/Button";
import { useInView } from "react-intersection-observer";
import { ButtonProps } from "@/types/ButtonProps";

interface FullWidthPromoProps {
  buttons: Array<ButtonProps>;
  image: object;
  tagline?: string;
  title: string;
}

const FullWidthPromo: React.FC<FullWidthPromoProps> = ({
  buttons,
  image,
  tagline,
  title,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`${styles.fullWidthPromo} ${inView ? styles.animation : ""}`}
    >
      <div className={styles.fullWidthPromoWrapper}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            alt="cover-image"
            src={`https:${
              (image as { fields: { file: { url: string } } })?.fields?.file.url
            }`}
            width={500}
            height={700}
            priority={true}
          />
        </div>
        <div className={styles.contentContainer}>
          {tagline && <p className={styles.tagline}>{tagline}</p>}
          {title && <h4 className={styles.title}>{title}</h4>}
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
      </div>
    </div>
  );
};

export default FullWidthPromo;
