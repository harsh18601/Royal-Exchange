import { createClient, EntrySkeletonType } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "";

if (!space || !accessToken) {
  console.warn("Contentful Space ID or Access Token is missing. CMS features may not work.");
}

export const client = createClient({
  space: space,
  accessToken: accessToken,
});

export interface GemstoneSkeleton extends EntrySkeletonType {
  contentTypeId: "gemstone";
  fields: {
    name: string;
    category: string;
    caratWeight: number;
    color: string;
    origin: string;
    treatment: string;
    price: number;
    description: string;
    mainImage?: any;
    investmentScore?: number;
    rarityScore?: number;
    value?: number;
    dimensions?: string;
    certificateNumber?: string;
    certificateLab?: string;
    availability?: string;
    labCertificatePdf?: any;
  };
}

export const getGemstones = async () => {
  try {
    const entries = await client.getEntries<GemstoneSkeleton>({
      content_type: "gemstone",
    });
    return entries.items;
  } catch (error) {
    console.error("Error fetching gemstones from Contentful:", error);
    return [];
  }
};

export const getGemstoneById = async (id: string) => {
  try {
    const entry = await client.getEntry<GemstoneSkeleton>(id);
    return entry;
  } catch (error) {
    console.error(`Error fetching gemstone with ID ${id}:`, error);
    return null;
  }
};

// Generic fetchers for other types
export const getEntriesByType = async <T extends EntrySkeletonType>(type: string) => {
  try {
    const entries = await client.getEntries<T>({
      content_type: type,
    });
    return entries.items;
  } catch (error) {
    console.error(`Error fetching ${type} from Contentful:`, error);
    return [];
  }
};

export const getLegalPageBySlug = async (slug: string) => {
  try {
    const entries = await client.getEntries<any>({
      content_type: "legalPage",
      "fields.slug": slug,
    });
    return entries.items[0] || null;
  } catch (error) {
    console.error(`Error fetching legal page ${slug}:`, error);
    return null;
  }
};

export const getSiteConfig = async () => {
  try {
    const entries = await client.getEntries<any>({
      content_type: "siteConfig",
    });
    return entries.items[0] || null;
  } catch (error) {
    console.error("Error fetching site config:", error);
    return null;
  }
};
