import axios from "axios";

export const usomService = {
  getUsomUrl,
  getUsomUrlHundred,
};
async function getUsomUrl(page) {
  try {
    const response = await axios.get(
      `https://www.usom.gov.tr/api/address/index?type=domain&page=${page}`
    );
    return response.data.models;
  } catch (error) {
    console.error("Zararlı adresler alınırken bir hata oluştu:", error);
  }
}

async function getUsomUrlHundred() {
  try {
    const response1 = await axios.get(
      `https://www.usom.gov.tr/api/address/index?type=domain&page=1`
    );
    const response2 = await axios.get(
      `https://www.usom.gov.tr/api/address/index?type=domain&page=2`
    );
    const response3 = await axios.get(
      `https://www.usom.gov.tr/api/address/index?type=domain&page=3`
    );
    const response4 = await axios.get(
      `https://www.usom.gov.tr/api/address/index?type=domain&page=4`
    );
    const response5 = await axios.get(
      `https://www.usom.gov.tr/api/address/index?type=domain&page=5`
    );
    const allData = [
      ...response1.data.models,
      ...response2.data.models,
      ...response3.data.models,
      ...response4.data.models,
      ...response5.data.models,
    ];
    const urlGrouped = await getUsomUrlGrouped(allData);
    const descGrouped = await getUsomDescGrouped(allData);
    return [urlGrouped, descGrouped, allData];
  } catch (error) {
    console.error("Zararlı adresler alınırken bir hata oluştu:", error);
  }
}

async function getUsomUrlGrouped(data) {
  try {
    const domainGroup = data.reduce((result, item) => {
      const url = new URL("https://" + item.url);
      const domain = url.hostname.split(".").pop();
      result[domain] = (result[domain] || 0) + 1;
      return result;
    }, {});
    const formattedDomainGroup = Object.entries(domainGroup).map(
      ([name, num]) => ({ name, num })
    );
    return formattedDomainGroup;
  } catch (error) {
    console.error("Zararlı adresler alınırken bir hata oluştu:", error);
  }
}
async function getUsomDescGrouped(data) {
  try {
    const descGroup = data.reduce((result, item) => {
      result[item.desc] = (result[item.desc] || 0) + 1;
      return result;
    }, {});
    const formattedDescGroup = Object.entries(descGroup).map(([name, num]) => ({
      name,
      num,
    }));
    return formattedDescGroup;
  } catch (error) {
    console.error("Zararlı adresler alınırken bir hata oluştu:", error);
  }
}
