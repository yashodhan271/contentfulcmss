import Image from "next/image";
import styles from "./styles.module.scss";
import { ButtonProps } from "@/types/ButtonProps";
import { useInView } from "react-intersection-observer";
import Button from "@/components/atoms/Button/Button";

export interface CardsProps {
  firstCardIcon?: object;
  firstCardTagline: string;
  firstCardTitle: string;
  firstCardLink: ButtonProps;
  secondCardIcon?: object;
  secondCardTagline?: string;
  secondCardTitle?: string;
  secondCardLink?: ButtonProps;
}

export const Cards = ({
  firstCardIcon,
  firstCardTagline,
  firstCardTitle,
  firstCardLink,
  secondCardIcon,
  secondCardTagline,
  secondCardTitle,
  secondCardLink,
}: CardsProps) => {
  const secondCardExists =
    secondCardIcon && secondCardTagline && secondCardTitle && secondCardLink;
    const [ref, inView] = useInView({
      triggerOnce: true,
    });
  return (
    <div ref={ref} className={`${styles.cards} ${inView ? styles.animation : ""}`}>
      <div
        className={`${styles.card} ${
          secondCardExists ? "": styles.cardFullwidth 
        }`}
      >
        {firstCardIcon && (
          <Image
            src={`https:${
              (firstCardIcon as { fields: { file: { url: string } } })?.fields
                ?.file.url
            }`}
            alt={
              (
                firstCardIcon as {
                  fields: {
                    description: string;
                  };
                }
              )?.fields?.description
            }
            width={48}
            height={48}
          ></Image>
        )}
        <p className={styles.tagline}>{firstCardTagline}</p>
        <p className={styles.title}>{firstCardTitle}</p>
        <Button
          url={firstCardLink.fields.url}
          external={firstCardLink.fields.external}
          text={firstCardLink.fields.label}
          theme="tertiary"
        ></Button>
      </div>
      {secondCardExists && (
        <div className={styles.card}>
          <Image
            src={`https:${
              (secondCardIcon as { fields: { file: { url: string } } })?.fields
                ?.file.url
            }`}
            alt={
              (
                secondCardIcon as {
                  fields: {
                    description: string;
                  };
                }
              )?.fields?.description
            }
            width={48}
            height={48}
          ></Image>
          <p className={styles.tagline}>{secondCardTagline}</p>
          <p className={styles.title}>{secondCardTitle}</p>
          <Button
            url={secondCardLink.fields.url}
            external={secondCardLink.fields.external}
            text={secondCardLink.fields.label}
            theme="tertiary"
          />
        </div>
      )}
    </div>
  );
};
