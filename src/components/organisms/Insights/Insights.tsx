"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Tag from "@/components/atoms/Tag/Tag";
import { Loading } from "@/components/atoms/Loading/Loading";
import ReducedTiles from "../ReducedTiles/ReducedTiles";
import Pagination from "@/components/atoms/Pagination/Pagination";
import NoResults from "@/components/atoms/NoResults/NoResults";
import Dropdown from "@/components/atoms/Dropdown/Dropdown";
import { getTags } from "@/utils/contentful";
import { getPosts } from "@/services/get-posts";

const Insights: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [tags, setTags] = useState([{ key: "all", value: "All" }]);
  const [options, setOptions] = useState([{ value: "all", label: "All" }]);
  const [type, setType] = useState(tags[0]);
  const [results, setResults] = useState({ results: [], total: 0 });

  const pagination = {
    pageSize: 8,
  };

  const updateType = (item: {
    key?: string;
    value: string;
    label?: string;
  }) => {
    if ("key" in item) {
      setType({ key: item.key!, value: item.value });
    } else if ("label" in item) {
      setType({ key: item.value, value: item.label! });
    }
  };

  const fetchResults = async () => {
    setIsLoading(true);
    const fetchedResults = await getPosts(
      type.key,
      currentPage,
      pagination.pageSize
    );
    setResults(fetchedResults);
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchSubjects = async () => {
      const tags = await getTags();
      const subjects = tags.filter((tag: any) =>
        tag.sys.id.includes("subject")
      );
      const createTags = subjects.map((tag: any) => ({
        key: tag.sys.id,
        value: tag.name.replace("Subject: ", ""),
      }));
      createTags.unshift({ key: "all", value: "All" });
      const createOptions = subjects.map((tag: any) => ({
        value: tag.sys.id,
        label: tag.name.replace("Subject: ", ""),
      }));
      createOptions.unshift({ value: "all", label: "All" });
      setTags(createTags);
      setOptions(createOptions);
    };
    fetchSubjects();
  }, []);

  useEffect(() => {
    fetchResults();
  }, [currentPage, type]);

  useEffect(() => {
    setCurrentPage(1);
  }, [type]);

  return (
    <div className={styles.insights}>
      <div className={styles.dropdownContainer}>
        {options.length > 0 && (
        
          <Dropdown
            onChange={updateType}
            options={options.filter(option => option.value !== "subjectAll")}
            label="Filter by subject"
          />
        )}
      </div>
      <div className={styles.tagContainer}>
        <p className={styles.tagHeading}>Filter by Subject</p>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map(
              (tag) =>
                tag.key !== "subjectAll" && (
                  <Tag
                    key={tag.key}
                    tagKey={tag.key}
                    value={tag.value}
                    activeTag={type.key}
                    onClick={updateType}
                  />
                )
            )}
          </div>
        )}
      </div>

      <div className={styles.results}>
        {isLoading && <Loading />}
        {results.results.length === 0 && !isLoading && (
          <NoResults message="Sorry, no matches were found." />
        )}
        {!isLoading && results.results.length > 0 && (
          <>
            <ReducedTiles data={results.results} type="Insights" />
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(results.total / pagination.pageSize)}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Insights;
