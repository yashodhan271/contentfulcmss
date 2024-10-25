import { getPageData } from "@/utils/contentful";
import { Entry } from "contentful";
import { ComponentLoader } from "@/utils/ComponentLoader";
import Hero from "@/components/organisms/Hero/Hero";
import { ButtonProps } from "@/types/ButtonProps";
import { Document } from "@contentful/rich-text-types";
import styles from "@/styles/layout.module.scss";

export default async function Home() {
  const page = await getPageData("page", "home");
  const { content, hero } = page.fields;
  const {
    typeOfHero,
    tagline,
    taglineUrl,
    title: heroTitle,
    bodyCopy,
    buttons,
    image,
  } = hero?.fields || {};

  let repeaterCount = 0;

  return (
    <>
      {typeOfHero && (
        <Hero
          typeOfHero={typeOfHero as string}
          tagline={tagline as string}
          taglineUrl={taglineUrl as string}
          title={heroTitle as string}
          bodyCopy={bodyCopy as Document}
          buttons={buttons as Array<ButtonProps>}
          image={image as object}
        ></Hero>
      )}
      <main className={styles.pageWrapper}>
        {content?.map((component: Entry) => {
          if (!component.fields) return;
          return (
            <ComponentLoader
              key={component.sys.id}
              data={component}
              contentType={component?.sys?.contentType?.sys?.id}
            />
          );
        })}
      </main>
    </>
  );
}
