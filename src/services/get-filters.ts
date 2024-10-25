"use server";

import { getSearchResults } from "@/utils/contentful";

export const getFilteredResults = async (
  tagIds: string[],
  currentPage: any,
  pageSize: any
) => {
  const skipMultiplier = currentPage === 1 ? 0 : currentPage - 1;
  const skip = skipMultiplier > 0 ? pageSize * skipMultiplier : 0;
  const queryParams: {
    query: string;
    "sys.contentType.sys.id[in]": string;
    "metadata.tags.sys.id[in]"?: string;
    order: string;
    skip: number;
    limit: any;
    [key: string]: any;
  } = {
    query: "",
    "sys.contentType.sys.id[in]": "commons,collection",
    order: "-sys.createdAt",
    skip: skip,
    limit: pageSize,
  };

  if (tagIds.length > 0) {
    queryParams["metadata.tags.sys.id[in]"] = tagIds.join(",");
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
