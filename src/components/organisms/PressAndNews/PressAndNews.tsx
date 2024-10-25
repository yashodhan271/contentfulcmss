'use client';

import { SearchInput } from '@/components/atoms/SearchInput/SearchInput';
import React, { useEffect, useState } from 'react';
import ReducedTiles from '../ReducedTiles/ReducedTiles';
import { getResults } from '@/services/get-results';
import Pagination from '@/components/atoms/Pagination/Pagination';
import styles from './styles.module.scss';
import Dropdown from '@/components/atoms/Dropdown/Dropdown';
import { getFirstEntryYearByPublishedDate } from '@/utils/contentful';
import { Loading } from '@/components/atoms/Loading/Loading';
import NoResults from '@/components/atoms/NoResults/NoResults';

const PressAndNews: React.FC = () => {
  const mostRecent = { value: "all", label: "Most recent" };
  const [searchVal, setSearchVal] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [year, setYear] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState({ results: [], total: 0 });
  const [options, setOptions] = useState([mostRecent]);
  const pagination = {
    pageSize: 8,
  };

  const addDatesToDropdown = async () => {
    const latestYear = new Date().getFullYear();
    const earliestYear = await getFirstEntryYearByPublishedDate();
    let years = [];
    years.push(mostRecent);
    for (let i = latestYear; i >= earliestYear!; i--) {
      years.push({ value: i.toString(), label: i.toString() });
    }
    setOptions([...years]);
  }

  const filterResults = async (e: any) => {
    setYear(e.value);
  }

  const submitQuery = async (e?: any) => {

    e?.preventDefault();
    const val = e?.target?.elements.query?.value
    setSearchVal(val);
  };

  useEffect(() => {
    addDatesToDropdown();
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      const fetchedResults = await getResults(searchVal, currentPage, pagination.pageSize, "news", true, year);
      setResults(fetchedResults);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchResults();

  }, [searchVal, currentPage, year]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchVal, year]);

  return (
    <div className={styles.pressAndNews}>
      <div className={styles.filters}>
        <div className={styles.searchInput}>
          <SearchInput submit={submitQuery} size="small" label="Search Press and News" />

        </div>
        <div className={styles.dropdownContainer}>
          <Dropdown onChange={filterResults} options={options} label="Filter by date" />
        </div>
      </div>
      {isLoading && <Loading />}
      {results.results.length === 0 && !isLoading && <NoResults message="Sorry, no matches were found." />}
      {results.results.length > 0 &&
        <>
          <ReducedTiles data={results.results} type={"News"} />
          <Pagination currentPage={currentPage} totalPages={Math.ceil(results.total / pagination.pageSize)} onPageChange={setCurrentPage} />
        </>
      }
    </div>
  );
};

export default PressAndNews;