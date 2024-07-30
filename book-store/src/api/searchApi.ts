import axios from 'axios';

const URL = 'https://openlibrary.org/search.json';

export const fetchSearchBooks = async (query: string) => {
  try {
    const response = await axios.get(URL, {
      params: {
        q: query,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('api error occured', error.message);
  }
};
