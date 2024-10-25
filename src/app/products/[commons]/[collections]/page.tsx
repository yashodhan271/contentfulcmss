import { getPageData } from "@/utils/contentful";
import { Entry } from "contentful";
import { ComponentLoader } from "@/utils/ComponentLoader";
import styles from "@/styles/layout.module.scss";
import Hero from "@/components/organisms/Hero/Hero";
import { Document } from "@contentful/rich-text-types";
import { ButtonProps } from "@/types/ButtonProps";

export default async function Collection({
  params,
}: {
  params: { collections: string };
}) {
  const page = await getPageData("collection", params.collections);
  const { content, common, title: collectionTitle, hero } = page.fields;

  const {
    typeOfHero,
    tagline,
    taglineUrl,
    title: heroTitle,
    bodyCopy,
    buttons,
    image,
  } = hero?.fields || {};

  return (
    <>
      {typeOfHero && (
        <Hero
          typeOfHero={typeOfHero as string}
          tagline={tagline as string ?? common.fields.title as string}
          taglineUrl={taglineUrl as string ?? `/products/${common.fields.slug}` as string}
          title={heroTitle as string ?? collectionTitle as string}
          bodyCopy={bodyCopy as Document}
          buttons={buttons as Array<ButtonProps>}
          image={image as object}
          theme={common.fields.commonType}
        ></Hero>
      )}
      <main className={styles.pageWrapper}>
        {content?.map((component: Entry) => {
          if (!component.fields) return;
          return (
            <ComponentLoader
              key={component?.sys?.id}
              data={component}
              theme={common.fields.commonType}
              contentType={component?.sys?.contentType?.sys?.id}
            />
          );
        })}
      </main>
    </>
  );
}
