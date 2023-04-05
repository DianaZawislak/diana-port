import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  try {
    const res = await fetch(
      `${process.env.aportfolio}.herokuapp/api/getPageInfo`
    );

    // Check res for error
    if (!res.ok) {
      console.error("Error fetching page info:", res.statusText);
      return null;
    }

    // Check if the response is valid JSON
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await res.text(); // Get the response as text
      console.error("Invalid JSON response:", text);
      return null;
    }

    // If the response is valid JSON, parse it and return
    const data = await res.json();
    const pageInfo = data.pageInfo;

    if (!pageInfo) {
      console.error("Error: pageInfo is null or undefined");
      return null;
    }

    const validPageInfo: PageInfo = pageInfo;

    return validPageInfo;
  } catch (error) {
    console.error("Error fetching page info:", error);
    return null;
  }
};
