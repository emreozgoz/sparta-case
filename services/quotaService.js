import axios from "axios";

export const quotaService = {
  getQuota,
};
async function getQuota() {
  try {
    const response = await axios.get(
      "https://api.themotivate365.com/stoic-quote"
    );
    return response.data.quote;
  } catch (error) {
    console.error(error);
  }
}
