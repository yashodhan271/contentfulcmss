import React from "react";
import styles from "./styles.module.scss";
import { formatCommonType } from "@/utils/functions";
import SmallThemeLogo from "@/components/atoms/SmallThemeLogo/SmallThemeLogo";
import CollectionTileMask from "@/components/atoms/CollectionTileMask/CollectionTileMask";
import {truncateTitle } from "@/utils/functions";

interface CollectionTileProps {
  commonType: string;
  title: string;
  image: {
    fields: {
      image: object;
    };
  };
  slug: string;
  type?: string;
  largeCarousel?: boolean;
}

const CollectionTile: React.FC<CollectionTileProps> = ({
  commonType,
  title,
  image,
  slug,
  type,
  largeCarousel,
}) => {
  const formattedCommonType = commonType.toLowerCase().replace(/\s+/g, '-');
  const url = typeof window !== 'undefined' ? `${window.location.origin}/products/${formattedCommonType}-commons/${slug}` : `/products/${formattedCommonType}-commons/${slug}`;
  const { themeClassPrimary, themeClass } = formatCommonType(commonType);
  let isLargeCarousel = largeCarousel ? styles.firstPosition : "";

  return (
    <div className={`${styles.collectionTile} ${type ? styles[type] : ""} ${isLargeCarousel}`}>
      <a href={url}>
        <div className={styles.imagesWrapper}>
          <CollectionTileMask
            theme={commonType}
            themeClassPrimary={themeClassPrimary}
            image={image?.fields?.image}
            imageIndex={3}
            isCollection={true}
            type={type}
            isLargeCarousel={largeCarousel}
          />
        </div>
        <div className={`${styles.logoContainer} ${themeClass} `}>
          <h6>{truncateTitle(title)}</h6>
          <div className={styles.logoCommon}>
            <SmallThemeLogo theme={commonType} width={32} height={32} />
            <p>{commonType} Commons</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CollectionTile;