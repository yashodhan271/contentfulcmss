import styles from "./styles.module.scss";
import TextColumn from "@/components/molecules/TextColumn/TextColumn";
import AutoSizeImage from "@/components/atoms/AutoSizeImage/AutoSizeImage";
import React, { useState, useEffect } from "react";
import { italicizeText } from "@/utils/functions";

interface TextAndImageProps {
  image: object;
  contentColumn: object;
  captionImage: string;
  tickBenefits?: boolean;
  imageOnLeft?: boolean;
}

const TextAndImage: React.FC<TextAndImageProps> = ({
  image,
  contentColumn,
  captionImage,
  tickBenefits,
  imageOnLeft,
}) => {
  const { buttons, text, title } = (contentColumn as { fields: any }).fields;
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };

  return (
    <div className={`${tickBenefits ? styles.tickBenefits : ""}`}>
      <div
        className={`${styles.textAndImage} ${
          imageOnLeft ? styles.imageOnLeft : ""
        }`}
      >
        <div className={styles.imageWrapper}>
          <AutoSizeImage
            src={`https:${
              (image as { fields: { file: { url: string } } })?.fields?.file.url
            }`}
            description={`${
              (image as { fields: { description: string } })?.fields
                ?.description
            }`}
            width={
              (
                image as {
                  fields: { file: { details: { image: { width: string } } } };
                }
              )?.fields?.file.details.image.width
            }
            height={
              (
                image as {
                  fields: { file: { details: { image: { height: string } } } };
                }
              )?.fields?.file.details.image.height
            }
            captionImage={captionImage}
          />
          {captionImage && (
            <div
              style={{
                maxWidth:
                  windowWidth && windowWidth >= 940
                    ? (
                        image as {
                          fields: {
                            file: { details: { image: { width: string } } };
                          };
                        }
                      ).fields.file.details.image.width
                    : "100%",
              }}
              className={styles.captionImage}
            >
              <p dangerouslySetInnerHTML={createMarkup(italicizeText(captionImage))} />
            </div>
          )}
        </div>
        <div
          className={`${styles.contentColumn} ${
            imageOnLeft ? styles.contentColRight : styles.contentColLeft
          }`}
        >
          <TextColumn
            buttons={buttons}
            text={text}
            title={title}
            textImage={true}
          />
        </div>
      </div>
    </div>
  );
};

export default TextAndImage;
