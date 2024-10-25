import React from "react";
import styles from "./styles.module.scss";
import { formatCommonType } from "@/utils/functions";
import SmallThemeLogo from "@/components/atoms/SmallThemeLogo/SmallThemeLogo";
import CollectionTileMask from "@/components/atoms/CollectionTileMask/CollectionTileMask";
import {truncateTitle } from "@/utils/functions";

interface CommonTileProps {
  commonType: string;
  title: string;
  featureImages: Array<object>;
  type?: string;
  slug?: string;
  largeCarousel?: boolean;
}

const CommonTile: React.FC<CommonTileProps> = ({
  commonType,
  title,
  featureImages,
  type,
  slug,
  largeCarousel,
}) => {
  const { themeClass, themeClassPrimary } = formatCommonType(commonType);
  const url = typeof window !== 'undefined' ? `${window.location.origin}/products/${slug}` : `/products/${slug}`;
  let isLargeCarousel = largeCarousel ? styles.firstPosition : "";

  return (
    <div className={`${styles.commonTile} ${type ? styles[type] : ""} ${isLargeCarousel}`}>
      <a href={url}>
        <div className={`${themeClassPrimary} ${styles.collectionContainer}`}>
          {featureImages && (
            <div className={styles.imagesWrapper}>
              {featureImages.map((image, index) => (
                <CollectionTileMask
                  key={index}
                  theme={commonType}
                  themeClassPrimary={themeClassPrimary}
                  image={image}
                  imageIndex={index}
                  isLargeCarousel={largeCarousel}
                />
              ))}
            </div>
          )}
        </div>
        <div className={`${themeClass} ${styles.logoContainer}`}>
          <div className={`${styles.logoCommon}`}>
            <SmallThemeLogo theme={commonType} width={32} height={32} />{" "}
            <h6>{truncateTitle(title)}</h6>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CommonTile;
