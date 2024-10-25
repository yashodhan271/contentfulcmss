import React from "react";
import styles from "./styles.module.scss";
import VideoItem from "@/components/molecules/VideoItem/VideoItem";
import { useState } from "react";
import Image from "next/image";
import playIcon from "../../../../public/icons/play-button.svg";
import playIconHover from "../../../../public/icons/Play-Button-hover.svg";
import { Document } from "@contentful/rich-text-types";
import { italicizeText } from "@/utils/functions";

interface VideoProps {
  videoEmbedUrl: object;
  caption?: string;
  theme?: string;
  extraText?: string;
  coverImage?: object;
}

const Video: React.FC<VideoProps> = ({
  videoEmbedUrl,
  caption,
  theme,
  extraText,
  coverImage,
}) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [playIconSrc, setPlayIconSrc] = useState(playIcon);

  const handlePlayClick = () => {
    setPlayVideo(!playVideo);
  };

  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };

  return (
    <div className={styles.video}>
      <p className={styles.extraText}>{extraText && extraText}</p>
      <div className={styles.videoContainer} onClick={handlePlayClick}>
        {coverImage && !playVideo && (
          <>
            <div className={styles.overlay}></div>
            <Image
              className={styles.videoCoverImage}
              alt="cover-image"
              src={`https:${
                (coverImage as { fields: { file: { url: string } } })?.fields
                  ?.file.url
              }`}
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div
              className={styles.playIconContainer}
              onMouseOver={() => setPlayIconSrc(playIconHover)}
              onMouseOut={() => setPlayIconSrc(playIcon)}
            >
              <Image
                alt="play-button"
                src={playIconSrc}
                width={64}
                height={64}
              />
            </div>
          </>
        )}

        {(playVideo || !coverImage) && (
          <VideoItem
            data={videoEmbedUrl && (videoEmbedUrl as Document)}
            autoplay={coverImage ? true : false}
          />
        )}
      </div>

      {caption && (
        <p
          className={styles.caption}
          dangerouslySetInnerHTML={createMarkup(italicizeText(caption))}
        />
      )}
    </div>
  );
};

export default Video;
