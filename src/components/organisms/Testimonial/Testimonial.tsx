import React from "react";
import themeStyles from "@/styles/themes.module.scss";
import { useInView } from "react-intersection-observer";
import ThemeLogo from "@/components/atoms/themeLogo/themeLogo";
import styles from "./styles.module.scss";
import TestimonialMark from "@/components/atoms/TestimonialMark/TestimonialMark";

interface TestimonialProps {
  text: string;
  author: string;
  themeClass?: string;
  theme?:string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, theme, themeClass }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });


  return (
    <div
      ref={ref}
      className={`${styles.testimonial} ${inView ? styles.animation : ""}`}
    >
      <div className={`${themeClass} ${styles.testimonialContainer}`}>
        <div className={styles.testimonialWrapper}>
          <div className={styles.mark}>
            <TestimonialMark theme={theme as string}/>
          </div>
          <blockquote className={styles.quote}>{text}</blockquote>
          <p className={styles.author}>{author}</p>
        </div>
        <div className={styles.logo}>
          <ThemeLogo  theme={theme as string}/>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
