import React from "react";
import styles from "./styles.module.scss";
import { Document } from "@contentful/rich-text-types";
import RichText from "../../../atoms/RichText/RichText";
import { ButtonProps } from "@/types/ButtonProps";
import { TextColumnItemProps } from "@/types/TextColumnItemProps";
import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import themeStyles from "@/styles/themes.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

interface ColumnsProps {
  title?: string;
  items: Array<TextColumnItemProps>;
  button: ButtonProps;
  contentType: string;
  icon?: object;
  theme?: string;
}

const Columns: React.FC<ColumnsProps> = ({
  title,
  items,
  button,
  contentType,
  icon,
  theme = "Default",
}) => {
  let columnClass =
    items.length === 2
      ? "twoColumns"
      : items.length === 4
      ? "fourColumns"
      : "threeColumns";

  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      numberRefs.current = numberRefs.current.slice(0, items.length);

      numberRefs.current.forEach((ref, index) => {
        gsap.fromTo(
          ref,
          { autoAlpha: 0, y: -50 },
          {
            autoAlpha: 1,
            y: 0,
            ease: "power3.out",
            delay: index * 0.2,
            duration: 3,
          }
        );
      });
    }
  }, [inView, items]);

  return (
    <div
      className={`${styles.textColumns} ${
        styles[contentType.replace(/\s/g, "")]
      } ` } ref={ref}
    >
    {title && <h4 className={styles.title}>{title}</h4>}
      <div className={`${styles.columns} ${styles[columnClass]}`}>
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={`${styles.column} ${styles[columnClass]}`}
            >
              {contentType === "Column Number" && (
                <div
                  ref={(el) => {
                    numberRefs.current[index] = el;
                    
                  }}
                  className={`${styles.number} ${
                    themeStyles[`${theme.replace(/\s/g, "")}TextColour`]
                  } ${styles.numberHidden}`}
                >
                  {index + 1}
                </div>
              )}
              {contentType === "Column Icon" && (
                <div className={styles.icon}>
                  <Image
                    className={styles.icon}
                    alt="icon"
                    src={`https:${
                      (icon as { fields: { file: { url: string } } })?.fields
                        ?.file.url
                    }`}
                    width={48}
                    height={48}
                  ></Image>
                </div>
              )}
              <p className={styles.columnTitle}>{item?.fields?.title}</p>
              <div className={styles.textContainer}>
                <RichText data={item?.fields?.text as Document} />
              </div>
              {item?.fields?.buttons && item.fields.buttons.length > 0 && (
                <div className={styles.columnLink}>
                  <Button
                    text={item.fields.buttons[0].fields.label}
                    url={item.fields.buttons[0].fields.url}
                    theme="tertiary"
                    external={item.fields.buttons[0].fields.external}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {button && (
        <div className={styles.columnsButton}>
          <Button
            text={button?.fields?.label}
            url={button?.fields?.url}
            theme={button?.fields?.type}
            external={button?.fields?.external}
          />
        </div>
      )}
    </div>
  );
};

export default Columns;
