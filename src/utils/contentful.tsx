'use server';

const space = process.env.CONTENTFUL_SPACE_ID;
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";

export async function fetchEntries(query: any, preview: boolean) {
  const previewClient = require("contentful").createClient({
    space: space,
    accessToken: previewAccessToken,
    host: "preview.contentful.com",
    environment,
  });

  const client = require("contentful").createClient({
    space: space,
    accessToken: accessToken,
    environment,
  });
  const getClient = preview ? previewClient : client;
  const entries = await getClient.withoutUnresolvableLinks.getEntries(query);

  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${query.content_type.name}.`);
}

export async function getPageIds(type: string) {
  const dataType = await fetchEntries(
    {
      content_type: type,
      include: 9,
    },
    false
  );

  const data: any = await dataType?.map((p: any) => {
    return p.fields;
  });

  return {
    props: {
      data: data.map((page: any) => {
        return { slug: page.slug, template: page.template };
      }),
    },
  };
}
export async function getPageData(type: any, slug: any) {
  const dataType = await fetchEntries(
    {
      content_type: type,
      'fields.slug': slug,
      include: 9
    },
    false
  );


  const data: any = await dataType?.map((p: any) => {
    return p.fields;
  });

  return {
    fields: data[0],
    sys: dataType[0].sys
  };
}

export async function searchNewsletters(query: any) {
  const client = require("contentful").createClient({
    space: space,
    accessToken: accessToken,
    environment,
  });
  const getClient = client;

  const entries = await getClient.withoutUnresolvableLinks.getAssets(query);
  if (entries) return entries;
  return [];

}

export async function getSearchResults(query: any) {

  const client = require("contentful").createClient({
    space: space,
    accessToken: accessToken,
    environment,
  });
  const getClient = client;

  const entries = await getClient.withoutUnresolvableLinks.getEntries(query);
  if (entries) return entries;
  return [];
}

export async function fetchEntriesWithTag(tagIds: string[], preview: boolean) {
  const previewClient = require("contentful").createClient({
    space: space,
    accessToken: previewAccessToken,
    host: "preview.contentful.com",
    environment,
  });
  const client = require("contentful").createClient({
    space: space,
    accessToken: accessToken,
  });
  const getClient = preview ? previewClient : client;
  const entries = await getClient.withoutUnresolvableLinks.getEntries({
    'metadata.tags.sys.id[in]': tagIds.join(','),
  });
  if (entries.items) return entries.items;
  return [];
}

export async function getFirstEntryYearByPublishedDate() {
  const client = require("contentful").createClient({
    space: space,
    accessToken: accessToken,
    environment,
  });

  const entries = await client.getEntries({
    content_type: "pressRelease",
    order: 'fields.publishedDate',
    limit: 1,
  });
  if (entries.items.length > 0) {
    const firstEntry = entries.items[0];
    const publishedDate = new Date(firstEntry.fields.publishedDate);
    return publishedDate.getFullYear();
  }

  return null;
}

export const getHeaderData = async () => {
  const entries = await fetchEntries(
    { content_type: "siteFurniture", include: 5 },
    false
  );
  return entries;
};

export async function getTags() {
  const client = require("contentful").createClient({
    space: space,
    accessToken: accessToken,
    environment,
  });

  const tags = await client.getTags();
  if (tags.items) return tags.items;

  return null;
}