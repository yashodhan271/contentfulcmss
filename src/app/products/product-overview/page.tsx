import {
  fetchEntries,
  fetchEntriesWithTag,
  getPageData,
} from "@/utils/contentful";
import { Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { ComponentLoader } from "@/utils/ComponentLoader";
import styles from "@/styles/layout.module.scss";
import Filters from "@/components/organisms/Filters/Filters";
import Hero from "@/components/organisms/Hero/Hero";
import { ButtonProps } from "@/types/ButtonProps";

export default async function Home() {
  const page = await fetchEntries(
    { content_type: "productOverview", include: 5 },
    false
  );
  const { title, filters, hero } = page[0].fields;
  const { heading, filterData } = filters.fields;
  const {
    typeOfHero,
    tagline,
    taglineUrl,
    taglineIcon,
    title: heroTitle,
    bodyCopy,
    buttons,
    image,
  } = hero.fields;

  const results = await fetchEntriesWithTag(["subjectPolicy"], false);

  return (
    <>
      <Hero
        typeOfHero={typeOfHero as string}
        tagline={tagline as string}
        taglineUrl={taglineUrl as string}
        title={heroTitle as string}
        bodyCopy={bodyCopy as Document}
        buttons={buttons as Array<ButtonProps>}
        image={image as object}
      ></Hero>
      <main className={styles.pageWrapper}>
        <Filters heading={heading} filters={filterData}></Filters>
      </main>
    </>
  );
}
