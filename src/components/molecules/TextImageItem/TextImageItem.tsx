import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { italicizeText } from "@/utils/functions";

interface TextImageItemProps {
  image: object;
  title: string;
  subtitle: string;
  copy: string;
}

const TextImageItem: React.FC<TextImageItemProps> = ({
  image,
  title,
  subtitle,
  copy,
}) => {
  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };

  return (
    <div className={styles.textImageColumn}>
      {image && (
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            alt="icon"
            src={`https:${
              (image as { fields: { file: { url: string } } })?.fields?.file.url
            }`}
            width={320}
            height={424}
          />
        </div>
      )}
      {title && (
        <p
          className={styles.title}
          dangerouslySetInnerHTML={createMarkup(italicizeText(title))}
        />
      )}
      {subtitle && (
        <p
          className={styles.subtitle}
          dangerouslySetInnerHTML={createMarkup(italicizeText(subtitle))}
        />
      )}
      {copy && (
        <p
          className={styles.copy}
          dangerouslySetInnerHTML={createMarkup(italicizeText(copy))}
        />
      )}
    </div>
  );
};

export default TextImageItem;
