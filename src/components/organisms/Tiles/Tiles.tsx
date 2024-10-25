import React from "react";
import { CommonItemProps, CollectionItemProps } from "@/types/TileItemProps";
import CommonTile from "@/components/molecules/CommonTile/CommonTile";
import { HeroFields } from "@/types/TileItemProps";
import themeStyles from "@/styles/themes.module.scss";
import CollectionTile from "@/components/molecules/CollectionTile/CollectionTile";

interface TilesProps {
  data?: CommonItemProps | CollectionItemProps;
  type?: "filterResults" | "carousel";
  largeCarousel?: boolean;
}

const Tiles: React.FC<TilesProps> = ({
  data,
  type,
  largeCarousel,
}) => {
  if (data && "commonType" in data?.fields) {
    const commonData = data as CommonItemProps;
    return (
      <CommonTile
        commonType={commonData?.fields?.commonType}
        title={commonData?.fields?.title}
        featureImages={commonData?.fields?.featureImages}
        type={type}
        slug={commonData?.fields?.slug}
        largeCarousel={
          largeCarousel
        }
      />
    );
  } else if (data && "common" in data?.fields) {
    const collectionData = data as CollectionItemProps;
    return (
      <CollectionTile
        commonType={collectionData?.fields?.common?.fields?.commonType}
        title={collectionData?.fields?.title}
        image={{ fields: { image: collectionData?.fields?.hero?.fields?.image } }}
        slug={collectionData?.fields?.slug}
        type={type}
        largeCarousel={
          largeCarousel
        }
      />
    );
  } else {
    return null;
  }
};

export default Tiles;
