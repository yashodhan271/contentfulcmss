import Image from "next/image";
import { useContext } from "react";
import styles from "./styles.module.scss";

export interface SearchInputProps {
  size?: "small" | "large";
  submit: (e: any) => void;
  searchVal?: string;
  label?: string;
}
export const SearchInput = ({ size = "large", submit, searchVal, label }: SearchInputProps) => {

  return (
    <form onSubmit={submit}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={`${styles.inputWrapper} ${styles[size]}`}>
        <Image
          className={styles.searchIcon}
          alt="search"
          src="/icons/search.svg"
          width={size === "small" ? 16 : 24}
          height={size === "small" ? 16 : 24}
        ></Image>
        <input
          type="search"
          name="query"
          placeholder={"Search"}
          defaultValue={searchVal}
          className={styles.searchInput}
          autoComplete="off"
        ></input>
      </div>
    </form>
  );
}