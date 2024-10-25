import Hero from "@/components/organisms/Hero/Hero";
import Newsletters from "@/components/organisms/Newsletters/Newsletters";
import styles from "@/styles/layout.module.scss";
import { getHeaderData } from "@/utils/contentful";

export default async function NewslettersPage() {
  const data = await getHeaderData();
  const { newsletterHeroTitle } = data[0]?.fields;

  return (
    <>
      <Hero
        typeOfHero="Thinhero"
        title={
          newsletterHeroTitle ? newsletterHeroTitle : "Our Commons' Newsletters"
        }
      />
      <main className={`${styles.pageWrapper}`}>
        <Newsletters />
      </main>
    </>
  );
}
