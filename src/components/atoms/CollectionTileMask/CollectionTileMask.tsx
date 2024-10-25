import Image from "next/image";
import styles from "./styles.module.scss";

interface CollectionTileMaskProps {
  theme?: string;
  image?: object;
  imageIndex?: number;
  themeClassPrimary?: string;
  isCollection?: boolean;
  type?: string;
  isLargeCarousel?: boolean;
}

interface TileMaskImageType {
  fields: { file: { url: string } }
}

const CollectionTileMask: React.FC<CollectionTileMaskProps> = ({
  theme,
  image,
  imageIndex,
  themeClassPrimary,
  isCollection,
  type,
  isLargeCarousel,
}) => {
  return (
    <div
      className={`${styles.wrapper} ${styles[`item-${imageIndex}`]} ${isCollection ? styles.collectionType : ""
        } ${type ? styles[type] : ""} ${isLargeCarousel ? styles.largeCarousel : ""}`}
    >
      <Image
        className={styles.image}
        alt="collection-image"
        src={image ? `https:${(image as TileMaskImageType)?.fields?.file?.url}` : ""} // need ternary operator to prevent "https://undefined" error
        fill={true}
        style={{ objectFit: "cover" }}
      />
      {isCollection && <div className={styles.overlay}></div>}
      <div className={` ${styles.maskContainer} ${!isLargeCarousel ? styles.maskContainerCarousel : ""}`}>
        <Image
          className={styles.mask}
          src={isCollection ? `/icons/collectionMask-large-${theme || "Default"}.svg` : `/icons/collectionMask-${theme || "Default"}.svg`}
          alt="mask"
          fill={true}
          style={{ objectFit: "cover" }}
        />
        <div className={`${themeClassPrimary} ${styles.falseText1}`}></div>
        <div className={`${themeClassPrimary} ${styles.falseText2}`}></div>
      </div>
    </div>
  );
};

export default CollectionTileMask;
