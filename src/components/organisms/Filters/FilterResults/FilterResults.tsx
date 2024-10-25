import React, { useState, useEffect } from 'react';
import { fetchEntries, fetchEntriesWithTag } from '@/utils/contentful';
import { Entry } from 'contentful';
import styles from './styles.module.scss'
import Tiles from '../../Tiles/Tiles';
import { CommonItemProps } from "@/types/TileItemProps";
import { Loading } from '@/components/atoms/Loading/Loading';
import Pagination from '@/components/atoms/Pagination/Pagination';
import { getFilteredResults } from '@/services/get-filters';
import NoResults from '@/components/atoms/NoResults/NoResults';
interface FilterResultsProps {
  checkedTags: { key: string; label: string }[]; // Assuming the checkedTags prop is passed down from the parent component
}

const FilterResults: React.FC<FilterResultsProps> = ({ checkedTags }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState({ results: [], total: 0 });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const pagination = {
    pageSize: 15,
  };
  useEffect(() => {
    const updateResults = async () => {
      try {
        const keys = checkedTags.map(tag => tag.key);
        const results = await getFilteredResults(keys, currentPage, pagination.pageSize);
        setResults(results);
        setError(null);
      } catch (err) {
        setError('Failed to fetch results');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (checkedTags.length > 0) {
      updateResults();
    } else if (checkedTags.length === 0) {
      updateResults();
    }
    else {
      setResults({ results: [], total: 0 });
    }
  }, [checkedTags, currentPage]);

  useEffect(() => {
    setCurrentPage(1); // Set currentPage to 1 whenever checkedTags change
    setLoading(true)
  }, [checkedTags]);

  return (
    <div className={styles.filterResults}>
      {loading}
      {loading && <Loading />}
      {error && <p>Error: {error}</p>}
      {!loading && results?.results.length === 0 && checkedTags.length > 0 && <NoResults message="Sorry, no results found." />}
      <div className={styles.tilesContainer}>
        {!loading && results?.results.map((component: any, index) => {
          return <Tiles key={index} data={component as CommonItemProps} type={"filterResults"} />;

        })}
      </div>

      {!loading && results?.results.length > 0 &&
        <Pagination currentPage={currentPage} totalPages={Math.ceil(results.total / pagination.pageSize)} onPageChange={setCurrentPage} isFilterPagination={true}/>
      }
    </div>

  );
};

export default FilterResults;
