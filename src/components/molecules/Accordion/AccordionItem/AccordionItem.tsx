import React, { ReactNode, useState } from "react";
import styles from "./styles.module.scss";
import {
  AccordionItemProps,
  AccordionItem as Item,
} from "@szhsin/react-accordion";
import chevronIcon from "../../../../../public/icons/accordion-chevron.svg";
import blackChevronIcon from "../../../../../public/icons/black-chevron.svg";
import Image from "next/image";
interface ItemProps extends AccordionItemProps {
  header: string;
  headerSize?: "small" | "large";
  type: "header" | "footer" | "filters" | "faqs";
  hasChevron?: boolean;
  hasPlusMinus?: boolean;
  children: ReactNode;
}

const AccordionItem: React.FC<ItemProps> = ({
  header,
  headerSize = "large",
  hasChevron,
  hasPlusMinus,
  children,
  type,
  ...rest
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={`${styles.accordionItem} ${styles[type]}  ${
        isExpanded ? styles.expandedItem : styles.collapsedItem
      }`}
    >
      <Item
        {...rest}
        header={
          <>
            {header}
            {hasChevron && (
              <Image
                className={styles.chevron}
                src={type === "faqs" ? blackChevronIcon : chevronIcon}
                alt="Chevron Down"
              />
            )}
            {hasPlusMinus && (
              <div className={`${styles.plusMinus} ${styles[type]}`}></div>
            )}
          </>
        }
        buttonProps={{
          className: ({ isEnter }) => {
            setIsExpanded(isEnter);
            return `${styles.accordionHeader} ${styles[type]} ${
              headerSize === "small" ? styles.smallHeader : "large"
            } ${isEnter && styles.expanded}`;
          },
        }}
        contentProps={{ className: styles.accordionContent }}
      >
        {children}
      </Item>
    </div>
  );
};

export default AccordionItem;
