import axios from "axios";

const getMediumScrappedData = async () => {
  try {
    const response = await axios.get("https://devnews-api.onrender.com/scrape");
    return response;
  } catch (err) {
    throw err;
  }
};

export { getMediumScrappedData };
