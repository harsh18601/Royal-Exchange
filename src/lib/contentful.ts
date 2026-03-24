import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";

export const client = createClient({
  space: space,
  accessToken: accessToken,
});

export const getGemstones = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "gemstone", // Make sure this matches your Contentful Content Type ID
    });
    return entries.items;
  } catch (error) {
    console.error("Error fetching gemstones from Contentful:", error);
    return [];
  }
};

export const getGemstoneById = async (id: string) => {
  try {
    const entry = await client.getEntry(id);
    return entry;
  } catch (error) {
    console.error(`Error fetching gemstone with ID ${id}:`, error);
    return null;
  }
};
