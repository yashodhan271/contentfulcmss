import Hero from "@/components/organisms/Hero/Hero";
import styles from "@/styles/layout.module.scss";
import pageStyles from "./page.module.scss";
import PressAndNews from "@/components/organisms/PressAndNews/PressAndNews";
import { getHeaderData } from "@/utils/contentful";

export default async function PressAndNewsPage() {
  const data = await getHeaderData();
  const { pressHeroTitle } = data[0]?.fields;

  return (
    <>
      <Hero
        typeOfHero="Thinhero"
        title={pressHeroTitle ? pressHeroTitle : "Press and News"}
      />
      <main className={`${styles.pageWrapper} ${pageStyles.pressAndNews} `}>
        <PressAndNews />
      </main>
    </>
  );
}
