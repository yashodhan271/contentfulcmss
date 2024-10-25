import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";


interface TestimonialMarkProps {
  theme?: string;
}

const TestimonialMark: React.FC<TestimonialMarkProps> = ({ theme }) => {

  return (
    <>
      <Image className={styles.testimonialMark} src={`/icons/testimonialMark-${theme || "Default"}.svg`} alt="quote-mark" width={68} height={53}/>
    </>
  );
};

export default TestimonialMark;
