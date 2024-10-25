import React from "react";
import { Document } from "@contentful/rich-text-types";
import { INLINES, Node } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";

interface VideoItemProps {
  data: Document;
  autoplay?: boolean;
}

const VideoItem: React.FC<VideoItemProps> = ({ data, autoplay }) => {
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

  interface HyperlinkNode extends Node {
    data: {
      uri: string;
    };
  }

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node: Node) => {
        const hyperlinkNode = node as HyperlinkNode;
        if (hyperlinkNode?.data?.uri?.includes("youtube.com/embed")) {
          return (
            <ReactPlayer
              clasName={styles.video}
              url={`${hyperlinkNode?.data?.uri}?autoplay=1&muted=1`}
              playing={autoplay ? true : false}
              controls={true}
              width="100%"
              height="100%"
            />
          );
        }
      },
    },
  };

  return (
    <div className={styles.videoItemContainer}>
      {data && documentToReactComponents(data, options)}
    </div>
  );
};

export default VideoItem;
