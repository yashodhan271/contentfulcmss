import React from "react";
import { Document } from "@contentful/rich-text-types";
import RichText from "@/components/atoms/RichText/RichText";
import styles from "./styles.module.scss";

interface BulletPointsTextItemProps {
  text: Document;
}

const BulletPointsTextItem: React.FC<BulletPointsTextItemProps> = ({
  text,
}) => {
  return (
    <div
      className={styles.bulletPointsTextItem}
    >
      <RichText data={text} />
    </div>
  );
};

export default BulletPointsTextItem;
