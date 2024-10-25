import Hero from "@/components/organisms/Hero/Hero";
import Insights from "@/components/organisms/Insights/Insights";
import styles from "@/styles/layout.module.scss";
import { getHeaderData } from "@/utils/contentful";

export default async function InsightsPage() {
  const data = await getHeaderData();
  const { insightsHeroTitle } = data[0]?.fields;

  return (
    <>
      <Hero
        typeOfHero="Thinhero"
        title={insightsHeroTitle ? insightsHeroTitle : "Our Insights"}
      />
      <main className={`${styles.pageWrapper}`}>
        <Insights />
      </main>
    </>
  );
}
