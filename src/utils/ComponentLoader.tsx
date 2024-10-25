"use client";
import themeStyles from "@/styles/themes.module.scss";
import Testimonial from "@/components/organisms/Testimonial/Testimonial";
import { Document } from "@contentful/rich-text-types";
import Statistics from "@/components/organisms/Statistics/Statistics";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import { Cards } from "@/components/organisms/50-50Cards/Cards";
import FullWidthPromo from "@/components/organisms/FullWidthPromo/FullWidhtPromo";
import { Entry } from "contentful";
import Video from "@/components/organisms/Video/Video";
import TextColumn from "@/components/molecules/TextColumn/TextColumn";
import TextAndImage from "@/components/organisms/TextAndImage/TextAndImage";
import Repeater from "@/components/organisms/Repeater/Repeater";
import { ButtonProps } from "@/types/ButtonProps";
import { TextColumnItemProps } from "@/types/TextColumnItemProps";
import PricingCards from "@/components/organisms/PricingCards/PricingCards";
import Form from "@/components/organisms/Form/Form";

export interface ComponentLoaderProps {
  data: Entry;
  contentType: string;
  theme?: string;
  pressRelease?: boolean;
}

export const ComponentLoader = ({
  data,
  contentType,
  theme,
  pressRelease,
}: ComponentLoaderProps) => {
  const updatedContent = useContentfulLiveUpdates(data);
  const themeClass = theme
    ? themeStyles[theme.replace(/\s/g, "")]
    : themeStyles.Default;
  const { fields } = updatedContent;
  switch (contentType) {
    case "testimonial":
      const { text, author } = fields;
      return (
        <Testimonial
          text={text as string}
          author={author as string}
          themeClass={themeClass as string}
          theme={theme as string}
        />
      );
    case "statistics":
      const {
        text: statisticsText,
        tagline: statisticsTagline,
        firstStatistic,
        firstDescriptiveText,
        secondStatistic,
        secondDescriptiveText,
      } = fields;
      return (
        <Statistics
          text={statisticsText as Document}
          tagline={statisticsTagline as string}
          firstStatistic={firstStatistic as string}
          firstDescriptiveText={firstDescriptiveText as string}
          secondStatistic={secondStatistic as string}
          secondDescriptiveText={secondDescriptiveText as string}
        />
      );
    case "cards":
      const {
        firstCardIcon,
        firstCardTagline,
        firstCardTitle,
        firstCardLink,
        secondCardIcon,
        secondCardTagline,
        secondCardTitle,
        secondCardLink,
      } = fields;
      return (
        <Cards
          firstCardIcon={firstCardIcon as object}
          firstCardTagline={firstCardTagline as string}
          firstCardTitle={firstCardTitle as string}
          firstCardLink={firstCardLink as ButtonProps}
          secondCardIcon={secondCardIcon as object}
          secondCardTagline={secondCardTagline as string}
          secondCardTitle={secondCardTitle as string}
          secondCardLink={secondCardLink as ButtonProps}
        />
      );
    case "video":
      const { videoEmbedUrl, caption, extraText, coverImage } = fields;
      return (
        <Video
          videoEmbedUrl={videoEmbedUrl as object}
          caption={caption as string}
          extraText={extraText as string}
          theme={theme as string}
          coverImage={coverImage as object}
        />
      );
    case "textColumn":
      const {
        buttons: textColumnButtons,
        text: textColumnText,
        title: textColumnTitle,
      } = fields;

      return (
        <TextColumn
          buttons={textColumnButtons as Array<ButtonProps>}
          text={textColumnText as Document}
          title={textColumnTitle as string}
          pressRelease={pressRelease as boolean}
        />
      );
    case "textAndImage":
      const {
        image: textAndImage,
        captionImage,
        contentColumn,
        tickBenefits,
        imageOnLeft,
      } = fields;

      return (
        <TextAndImage
          image={textAndImage as object}
          captionImage={captionImage as string}
          contentColumn={contentColumn as object}
          tickBenefits={tickBenefits as boolean}
          imageOnLeft={imageOnLeft as boolean}
        />
      );
    case "fullWidthPromo":
      const { buttons, image, tagline, title } = updatedContent.fields;
      return (
        <FullWidthPromo
          buttons={buttons as Array<ButtonProps>}
          image={image as object}
          tagline={tagline as string}
          title={title as string}
        />
      );
    case "repeater":
      const {
        button,
        items,
        title: repeaterTitle,
        contentType,
        icon,
        carouselType,
        salesTiles,
        generalTiles,
        commonsCollections,
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
      } = fields;

      return (
        <Repeater
          button={button as ButtonProps}
          items={items as Array<TextColumnItemProps>}
          title={repeaterTitle as string}
          contentType={contentType as string}
          icon={icon as object}
          theme={theme as string}
          carouselType={carouselType as string}
          commonsCollections={commonsCollections as Array<object>}
          salesTiles={salesTiles as Array<object>}
          generalTiles={generalTiles as Array<object>}
          largeCarousel={largeCarousel as boolean}
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
          lightBackground={lightBackground as boolean}
        />
      );
    case "pricingCards":
      const {
        firstCardTitle: firstPricingCardTitle,
        firstCopy,
        firstCta,
        firstBenefitsTitle,
        firstBenefits,
        secondCardTitle: secondPricingCardTitle,
        secondCopy,
        secondCta,
        secondBenefitsTitle,
        secondBenefits,
        thirdCardTitle,
        thirdCopy,
        thirdCta,
        thirdBenefitsTitle,
        thirdBenefits,
      } = fields;
      return (
        <PricingCards
          firstCardTitle={firstPricingCardTitle as string}
          firstCopy={firstCopy as string}
          firstCta={firstCta as ButtonProps}
          firstBenefitsTitle={firstBenefitsTitle as string}
          firstBenefits={firstBenefits as Document}
          secondCardTitle={secondPricingCardTitle as string}
          secondCopy={secondCopy as string}
          secondCta={secondCta as ButtonProps}
          secondBenefitsTitle={secondBenefitsTitle as string}
          secondBenefits={secondBenefits as Document}
          thirdCardTitle={thirdCardTitle as string}
          thirdCopy={thirdCopy as string}
          thirdCta={thirdCta as ButtonProps}
          thirdBenefitsTitle={thirdBenefitsTitle as string}
          thirdBenefits={thirdBenefits as Document}
        />
      );
    case "form":
      const { iframeUrl, textArea: formText, iframeHeight } = fields;
      return (
        <Form
          iframeUrl={iframeUrl as string}
          iframeHeight={iframeHeight as string}
          textArea={formText as Document}
        />
      );
  }
};
