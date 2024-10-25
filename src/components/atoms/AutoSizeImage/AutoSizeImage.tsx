import NextImage from "next/image";
import styles from "./styles.module.scss";

export interface AutoSizeImageProps {
  src: string;
  description?: string;
  width: string;
  height: string;
  captionImage?: string;
}
export const AutoSizeImage = ({ src, description, width, height }: AutoSizeImageProps) => {
  return (
    <div className={styles.imageWrapper}>
      <NextImage
        alt={description || ""}
        src={src}
        width="0"
        height="0"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: width,
          maxHeight: height,
        }}
      />
    </div>
  );
};

export default AutoSizeImage;
