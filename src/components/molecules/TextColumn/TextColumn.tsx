import React from "react";
import RichText from "@/components/atoms/RichText/RichText";
import Button from "@/components/atoms/Button/Button";
import { Document } from "@contentful/rich-text-types";
import styles from "./styles.module.scss";
import { ButtonProps } from "@/types/ButtonProps";

interface TextColumnProps {
  buttons: Array<ButtonProps>;
  text?: Document;
  title: string;
  textImage?: boolean;
  pressRelease?: boolean;
}

const TextColumn: React.FC<TextColumnProps> = ({
  buttons,
  text,
  title,
  textImage,
  pressRelease,
}) => {
  return (
    <div
      className={`${styles.textColumn} ${
        textImage ? styles.textAndImage : ""
      } ${pressRelease ? styles.pressRelease : ""}`}
    >
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.textWrapper}>
        {text && (
          <div className={styles.textWrapper}>
            <RichText data={text} />
          </div>
        )}
      </div>
      {buttons && (
        <div className={styles.buttonWrapper}>
          {buttons.map((buttonItem, index) => (
            <Button
              key={index}
              url={buttonItem.fields.url}
              external={buttonItem.fields.external}
              text={buttonItem.fields.label}
              theme={
                textImage && index === 1
                  ? "secondary"
                  : index === 1
                  ? "tertiary"
                  : "primary-dark"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TextColumn;
