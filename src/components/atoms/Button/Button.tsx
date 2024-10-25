import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

export interface ButtonProps {
  text?: string;
  url?: any;
  theme?: string;
  external?: boolean;
  action?: string;
  onClick?: () => void;
  iconSrc?: string | StaticImport;
  key?: number;
}

const Button = ({
  external,
  text,
  action,
  url,
  theme = "primary-dark",
  onClick,
  iconSrc,
}: ButtonProps) => {
  let c;
  if (action) {
    c = (
      <button
        type="button"
        className={`${styles.button} ${styles[theme]}`}
        onClick={onClick}
      >
        {iconSrc && <Image src={iconSrc} alt="icon" width={24} height={24} />}
        {text}
      </button>
    );
  } else if (external) {
    c = (
      <a href={url} target="_blank" rel="noreferrer">
        <button className={`${styles.button} ${styles[theme]}`}>
          {iconSrc && <Image src={iconSrc} alt="icon" width={24} height={24} />}
          {text}
        </button>
      </a>
    );
  } else {
    c = (
      <Link href={url && url}>
        <button
          className={`${styles.button} ${styles[theme]}`}
          onClick={onClick}
        >
          {iconSrc && <Image src={iconSrc} alt="icon" width={24} height={24} />}
          {text}
        </button>
      </Link>
    );
  }

  return c;
};

export default Button;
