import { searchNewsletters } from "@/utils/contentful";

export const getNewsletters = async (
  type: string,
  currentPage: any,
  pageSize: any
) => {
  const skipMultiplier = currentPage === 1 ? 0 : currentPage - 1;
  const skip = skipMultiplier > 0 ? pageSize * skipMultiplier : 0;

  const query = await searchNewsletters({
    query: "",
    "metadata.tags.sys.id[all]":
      type == "all" ? "newsletter" : `newsletter,${type}`,
    skip: skip,
    limit: pageSize,
  });

  const results: any = await query.items?.map((p: any) => {
    return {
      fields: p.fields,
      tags: p.metadata?.tags,
    };
  });

  return { results, total: query.total };
};
