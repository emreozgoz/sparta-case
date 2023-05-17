import axios from "axios";

export const whoIsDomainService = {
  getDomainData,
};
async function getDomainData(url) {
  try {
    const response = await axios.get(
      `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_qIanzJN0t7J89o70NeUrKJfzh8RkA&domainName=${url}&outputFormat=JSON`
    );
    return response.data.WhoisRecord;
  } catch (error) {
    console.error(error);
  }
}
