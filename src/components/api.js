import axios from "axios";

const API_KEY = "39799799-b8751a2dca689677868dbdc1d";
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page,
      });

      const response = await axios.get(BASE_URL, { params });
      return response.data;
}
