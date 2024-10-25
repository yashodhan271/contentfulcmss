'use client';

import React, { useState, useEffect } from 'react';
import { SearchInput } from '@/components/atoms/SearchInput/SearchInput';
import { getResults } from '@/services/get-results';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './styles.module.scss';
import Tag from '@/components/atoms/Tag/Tag';
import ReducedTiles from '../ReducedTiles/ReducedTiles';
import Pagination from '@/components/atoms/Pagination/Pagination';
import { Loading } from '@/components/atoms/Loading/Loading';

const SearchResults: React.FC = () => {
  const tags = [{ key: "collection", value: "Collections" }, { key: "commons", value: "Commons" }, { key: "news", value: "News" }, { key: "pressRelease", value: "Press releases" }, { key: "newsletter", value: "Newsletters" }, { key: "post", value: "Insights" }];
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [searchVal, setSearchVal] = useState<string>(params.get("query") || '');
  const [type, setType] = useState(tags[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState({ results: [], total: 0 });
  const pagination = {
    pageSize: 8,
  };


  const submitQuery = async (e?: any) => {
    const newParams = new URLSearchParams(params);

    e?.preventDefault();
    const val = e?.target?.elements.query?.value
    if (val === "") return;
    newParams.set("query", val);
    router.push(pathname + "?" + newParams.toString());
    setSearchVal(val);
  };

  const updateType = ({ key, value }: { key: string, value: string }) => {
    return setType({ key, value })
  };

  useEffect(() => {
    const fetchResults = async () => {
      const fetchedResults = await getResults(searchVal, currentPage, pagination.pageSize, type.key);
      setResults(fetchedResults);
      setIsLoading(false);
    };

    if (searchVal !== "") {
      setIsLoading(true);
      fetchResults();
    }
  }, [searchVal, currentPage, type]);

  useEffect(() => {
    setCurrentPage(1);
  }, [type, searchVal]);


  return (
    <div className={styles.searchResults}>
      <SearchInput submit={submitQuery} searchVal={searchVal} />
      <p className={styles.resultsLength}>{`(${results?.total}) Search Result${results?.total === 1 ? '' : 's'}`}</p>
      <p className={styles.largeQuery}>{
        isLoading ? searchVal : (
          results.results?.length == 0 ? "Sorry, no matches were found." : searchVal
        )
      }</p>

      <p className={styles.tagHeading}>Type</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <Tag key={tag.key} tagKey={tag.key} value={tag.value} activeTag={type.key} onClick={updateType} />
        ))}
      </div>
      <div className={styles.results}>
        {isLoading && <Loading />}
        {!isLoading && <>
          {results.results.length > 0 && <><ReducedTiles data={results.results} type={type.value} />
            <Pagination currentPage={currentPage} totalPages={Math.ceil(results.total / pagination.pageSize)} onPageChange={setCurrentPage} /></>
          }
        </>}
      </div>
    </div>

  );
};

export default SearchResults;
