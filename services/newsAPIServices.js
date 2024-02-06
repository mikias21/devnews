import axios from "axios";

const getTopTechUsNews = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=85ba6f442e3a4b02982bd2bdd1600cc5"
    );
    return response;
  } catch (err) {
    throw err;
  }
};

export { getTopTechUsNews };
