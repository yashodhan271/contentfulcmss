import { getPageData } from "@/utils/contentful";
import { Entry } from "contentful";
import { ComponentLoader } from "@/utils/ComponentLoader";
import styles from "@/styles/layout.module.scss";
import Hero from "@/components/organisms/Hero/Hero";

export default async function PressRelease({
  params,
}: {
  params: { post: string };
}) {
  const page = await getPageData("pressRelease", params.post);
  const {
    title,
    hero,
    publishedDate,
    content,
  } = page?.fields;
  const date = new Date(publishedDate);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return (
    <main className={styles.pageWrapper}>
      {content?.map((component: Entry) => {
        if (!component.fields) return;
        return (
          <>
            <Hero
              typeOfHero={hero?.fields?.typeOfHero as string}
              tagline={hero?.fields?.tagline as string ?? formattedDate as string}
              title={hero?.fields?.title as string ?? title as string}
              bodyCopy={hero?.fields?.bodyCopy}
              buttons={hero?.fields?.buttons}
              image={hero?.fields?.image}
            ></Hero>
            <ComponentLoader
              pressRelease={true}
              key={component.sys.id}
              data={component}
              contentType={component?.sys?.contentType?.sys?.id}
            />
          </>
        );
      })}
    </main>
  );
}
