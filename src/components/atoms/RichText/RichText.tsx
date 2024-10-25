import React from "react";
import {
  Document,
  BLOCKS,
  INLINES,
  MARKS,
  Node,
  Text,
} from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./styles.module.scss";

interface RichTextProps {
  data: Document;
}

const RichText: React.FC<RichTextProps> = ({ data }) => {
  interface HyperlinkNode extends Node {
    content: Text[];
    data: {
      uri: string;
    };
  }

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node: Node) => {
        const hyperlinkNode = node as HyperlinkNode;
        const content = hyperlinkNode.content.map((textNode, index) => {
          const wrappedContent = textNode.marks.reduce((acc, mark) => {
            if (mark.type === MARKS.BOLD) {
              return <strong key={index}>{acc}</strong>;
            } else if (mark.type === MARKS.ITALIC) {
              return <em key={index}>{acc}</em>;
            }
            return acc;
          }, <>{textNode.value}</>);

          return wrappedContent;
        });

        return <a href={hyperlinkNode.data.uri}>{content}</a>;
      },
      [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
        <p>{children}</p>
      ),
    },
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
    },
  };

  return (
    <div className={styles.richText}>
      {data && documentToReactComponents(data, options)}
    </div>
  );
};

export default RichText;
