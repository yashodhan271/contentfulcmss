
import styles from "@/styles/layout.module.scss";
import pageStyles from './page.module.scss';
import SearchResults from "@/components/organisms/SearchResults/SearchResults";
export default function Search() {

  return (
    <main className={`${styles.pageWrapper} ${pageStyles.search} `}>
      <SearchResults />
    </main>
  );
}
