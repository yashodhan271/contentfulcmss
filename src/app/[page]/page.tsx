import { getPageData } from "@/utils/contentful";
import { Entry } from "contentful";
import { ComponentLoader } from "@/utils/ComponentLoader";
import styles from "@/styles/layout.module.scss";
import Hero from "@/components/organisms/Hero/Hero";
import { ButtonProps } from "@/types/ButtonProps";
import { Document } from "@contentful/rich-text-types";

export default async function LandingPage({
  params,
}: {
  params: { page: string };
}) {

  const page = await getPageData("page", params.page);
  const { content, commonType, hero } = page.fields;
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
              theme={commonType}
              contentType={component?.sys?.contentType?.sys?.id}
            />
          );
        })}
      </main>
    </>
  );
}
