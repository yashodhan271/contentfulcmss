"use server";

import { getSearchResults, searchNewsletters } from "@/utils/contentful";

export const getResults = async (
  query: string,
  currentPage: any,
  pageSize: any,
  type?: string | null,
  pressAndNewsSearch?: boolean,
  year?: string | null
) => {
  const skipMultiplier = currentPage === 1 ? 0 : currentPage - 1;
  const skip = skipMultiplier > 0 ? pageSize * skipMultiplier : 0;
  let searchQuery;
  if (query.length <= 1 && !pressAndNewsSearch)
    return { results: [], total: 0 };

  if (type === "newsletter") {
    searchQuery = await searchNewsletters({
      query: query,
      "metadata.tags.sys.id[in]": "newsletter",
      skip: skip,
      limit: pageSize,
    });
  } else if (type === "news" || type === "pressRelease" || pressAndNewsSearch) {
    const startOfYear =
      year && year != "all"
        ? new Date(Number(year), 0).toISOString()
        : undefined;
    const endOfYear =
      year && year != "all"
        ? new Date(Number(year), 11).toISOString()
        : undefined;

    searchQuery = await getSearchResults({
      query: query ? query : "",
      content_type: "pressRelease",
      order: "-fields.publishedDate",
      "fields.news": pressAndNewsSearch ? null : type === "news" ? true : false,
      "fields.publishedDate[gte]": startOfYear,
      "fields.publishedDate[lte]": endOfYear,
      skip: skip,
      limit: pageSize,
    });
  } else {
    searchQuery = await getSearchResults({
      content_type: pressAndNewsSearch ? "pressRelease" : type,
      "fields.title[match]": query ? query : "",
      skip: skip,
      limit: pageSize,
    });
  }

  const results: any = await searchQuery.items?.map((p: any) => {
    return {
      fields: p.fields,
      contentType: p.sys.contentType?.sys.id,
      createdAt: p.sys.createdAt,
      tags: p.metadata?.tags,
    };
  });

  return { results, total: searchQuery.total };
};
