"use server";

import { getSearchResults } from "@/utils/contentful";

export const getPosts = async (
  type: string,
  currentPage: any,
  pageSize: any
) => {
  const skipMultiplier = currentPage === 1 ? 0 : currentPage - 1;
  const skip = skipMultiplier > 0 ? pageSize * skipMultiplier : 0;
  const queryParams: {
    query: string;
    content_type: string;
    skip: number;
    limit: any;
    [key: string]: any;
  } = {
    query: "",
    content_type: "post",
    skip: skip,
    limit: pageSize,
  };

  if (type !== "all") {
    queryParams["metadata.tags.sys.id[in]"] = `${type}`;
  }

  const query = await getSearchResults(queryParams);

  const results: any = await query.items?.map((p: any) => {
    return {
      fields: p.fields,
      tags: p.metadata?.tags,
    };
  });

  return { results, total: query.total };
};
