import axios from "axios";

export const foxService = {
  getFoxImage,
};
async function getFoxImage() {
  try {
    const response = await axios.get("https://randomfox.ca/floof/");
    return response.data.image;
  } catch (error) {
    console.error(error);
  }
}
