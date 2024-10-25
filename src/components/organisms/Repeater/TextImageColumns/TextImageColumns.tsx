import React from "react";
import styles from "./styles.module.scss";
import TextImageItem from "@/components/molecules/TextImageItem/TextImageItem";


interface textImageColumnsProps {
  title?: string;
  image1?: object;
  title1?: string;
  subtitle1?: string;
  copy1?: string;
  image2?: object;
  title2?: string;
  subtitle2?: string;
  copy2?: string;
  image3?: object;
  title3?: string;
  subtitle3?: string;
  copy3?: string;
}

const TextImageColumns: React.FC<textImageColumnsProps> = ({
  title,
  image1,
  title1,
  subtitle1,
  copy1,
  image2,
  title2,
  subtitle2,
  copy2,
  image3,
  title3,
  subtitle3,
  copy3,
}) => {
  const textImageItems = [
    { image: image1, itemTitle: title1, subtitle: subtitle1, copy: copy1 },
    { image: image2, itemTitle: title2, subtitle: subtitle2, copy: copy2 },
    { image: image3, itemTitle: title3, subtitle: subtitle3, copy: copy3 },
  ];
  const filteredItems = textImageItems.filter(
    (item) => item.image || item.itemTitle || item.subtitle || item.copy
  );


  return (
    <div className={styles.textImageColumnsComponent}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <div className={styles.columnsWrapper}>
        {textImageItems.map((item, index) => (
          <div key={index} className={styles.textImageItem}>
            <TextImageItem
              image={item.image as object}
              title={item.itemTitle as string}
              subtitle={item.subtitle as string}
              copy={item.copy as string}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextImageColumns;
