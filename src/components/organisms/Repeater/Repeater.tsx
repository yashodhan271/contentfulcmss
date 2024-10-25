import React from "react";
import Faqs from "./Faqs/Faqs";
import Columns from "./Columns/Columns";
import { ButtonProps } from "@/types/ButtonProps";
import { TextColumnItemProps } from "@/types/TextColumnItemProps";
import TextImageColumns from "./TextImageColumns/TextImageColumns";

import Carousel from "./Carousel/Carousel";
import {
  CommonItemProps,
  CollectionItemProps,
  SalesTilesItem,
  GeneralTilesItem,
} from "@/types/TileItemProps";

interface RepeaterProps {
  button: ButtonProps;
  items: Array<TextColumnItemProps>;
  commonsCollections: Array<object>;
  salesTiles: Array<object>;
  carouselType: string;
  generalTiles: Array<object>;
  title: string;
  contentType: string;
  icon?: object;
  theme?: string;
  largeCarousel?: boolean;
  image1?: object;
  title1?: string;
  subtitle1?: string;
  copy1?: string;
  image2?: object;
  title2?: string;
  subtitle2?: string;
  copy2?: string;
  image3?: object;
  title3?: string;
  subtitle3?: string;
  copy3?: string;
  lightBackground?: boolean;
}

const Repeater: React.FC<RepeaterProps> = ({
  button,
  items,
  title,
  contentType,
  icon,
  theme,
  carouselType,
  commonsCollections,
  salesTiles,
  generalTiles,
  largeCarousel,
  image1,
  title1,
  subtitle1,
  copy1,
  image2,
  title2,
  subtitle2,
  copy2,
  image3,
  title3,
  subtitle3,
  copy3,
  lightBackground,
}) => {
  if (contentType === "Accordion") {
    return <Faqs title={title} button={button as ButtonProps} items={items} />;
  } else if (contentType === "Carousel") {
    return (
      <Carousel
        title={title as string}
        carouselType={carouselType as string}
        commonsCollections={
          commonsCollections as Array<CommonItemProps | CollectionItemProps>
        }
        salesTiles={salesTiles as Array<SalesTilesItem>}
        generalTiles={generalTiles as Array<GeneralTilesItem>}
        largeCarousel={largeCarousel}
        lightBackground={lightBackground}
      />
    );
  } else if (contentType === "Column Text & Image") {
    return (
      <TextImageColumns
        title={title}
        image1={image1 as object}
        title1={title1 as string}
        subtitle1={subtitle1 as string}
        copy1={copy1 as string}
        image2={image2 as object}
        title2={title2 as string}
        subtitle2={subtitle2 as string}
        copy2={copy2 as string}
        image3={image3 as object}
        title3={title3 as string}
        subtitle3={subtitle3 as string}
        copy3={copy3 as string}
      />
    );
  } else {
    return (
      <Columns
        title={title as string}
        button={button as ButtonProps}
        items={items as Array<TextColumnItemProps>}
        contentType={contentType as string}
        icon={icon as object}
        theme={theme as string}
      />
    );
  }
};

export default Repeater;
