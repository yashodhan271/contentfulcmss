import { getPageData } from "@/utils/contentful";
import { Entry } from "contentful";
import { ComponentLoader } from "@/utils/ComponentLoader";
import styles from "@/styles/layout.module.scss";
import Hero from "@/components/organisms/Hero/Hero";
import { Document } from "@contentful/rich-text-types";
import { ButtonProps } from "@/types/ButtonProps";

export default async function Commons({
  params,
}: {
  params: { commons: string };
}) {
  const page = await getPageData("commons", params.commons);
  const { content, commonType, hero, title: commonTitle } = page.fields;
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
          taglineUrl={taglineUrl as string}
          title={heroTitle as string ?? commonTitle as string}
          bodyCopy={bodyCopy as Document}
          buttons={buttons as Array<ButtonProps>}
          image={image as object}
          theme={commonType}
        ></Hero>
      )}
      <main className={styles.pageWrapper}>
        {content?.map((component: Entry) => {
          if (!component.fields) return;
          return (
            <ComponentLoader
              key={component.sys.id}
              data={component}
              theme={commonType}
              contentType={component?.sys?.contentType?.sys?.id}
            />
          );
        })}
      </main>
    </>
  );
}
