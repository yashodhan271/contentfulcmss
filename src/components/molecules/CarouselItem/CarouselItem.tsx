import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { SalesTilesItem, GeneralTilesItem } from "@/types/TileItemProps";
import Button from "@/components/atoms/Button/Button";

interface CarouselItemProps {
  type?: string;
  data: SalesTilesItem | GeneralTilesItem;
  index: number;
  currentIndex: number;
  visibleSlides: number;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  data,
  index,
  currentIndex,
  visibleSlides,
}) => {
  return (
    <div className={styles.carouselItem}>
      <div className={styles.item}>
        {index === Math.floor(currentIndex + visibleSlides) && (
          <div className={styles.overlay}></div>
        )}
        {data.fields.icon && (
          <Image
            className={styles.icon}
            src={`https:${
              (data.fields.icon as { fields: { file: { url: string } } })
                ?.fields?.file.url
            }`}
            alt={
              (
                data.fields.icon as {
                  fields: {
                    description: string;
                  };
                }
              )?.fields?.description
            }
            width={96}
            height={96}
          ></Image>
        )}
        {"title" in data.fields && (
          <h6 className={styles.title}>{data.fields.title}</h6>
        )}
        {"subtitle" in data.fields && (
          <p className={styles.subtitle}>{data.fields.subtitle}</p>
        )}
        {"text" in data.fields && (
          <p className={styles.text}>{data.fields.text}</p>
        )}
        <div className={styles.linksContainer}>
          {"contactEmail" in data.fields && (
            <a href={`mailto:${data.fields.contactEmail}`}>
              <p className={styles.email}>{data.fields.contactEmail}</p>
            </a>
          )}
          {data.fields.tertiaryButton && (
            <div className={styles.tertiaryBtn}>
              <Button
                url={data.fields.tertiaryButton.fields.url}
                external={data.fields.tertiaryButton.fields.external}
                text={data.fields.tertiaryButton.fields.label}
                theme={"tertiary"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
