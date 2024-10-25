import React from "react";
import styles from "./styles.module.scss";
import { useInView } from "react-intersection-observer";
import { Document } from "@contentful/rich-text-types";
import RichText from "../../atoms/RichText/RichText";

interface StatisticsProps {
  text?: Document;
  firstStatistic: string;
  firstDescriptiveText: string;
  secondStatistic: string;
  secondDescriptiveText: string;
  tagline?: string;
}

const Statistics: React.FC<StatisticsProps> = ({
  text,
  tagline,
  firstStatistic,
  firstDescriptiveText,
  secondStatistic,
  secondDescriptiveText,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div>
      <div className={styles.statistics}>
        {text && (
          <div className={styles.text}>
            <RichText data={text} />
          </div>
        )}
        <div
          ref={ref}
          className={`${styles.statisticsWrapper}  ${
            inView ? styles.animation : ""
          } ${text ? "" : styles.statisticsFullwidth}`}
        >
          {tagline && <p className={styles.tagline}>{tagline}</p>}
          <div className={styles.firstItem}>
            <p className={styles.statistic}>{firstStatistic}</p>
            <p className={styles.descriptiveText}>{firstDescriptiveText}</p>
          </div>
          <div className={styles.secondItem}>
            <p className={styles.statistic}>{secondStatistic}</p>
            <p className={styles.descriptiveText}>{secondDescriptiveText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
