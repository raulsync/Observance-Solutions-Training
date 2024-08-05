import axios, { AxiosError } from 'axios';

const URL = 'https://openlibrary.org/search.json';

export const fetchSearchBooks = async (query: string) => {
  try {
    const response = await axios.get(URL, {
      params: {
        title: query,
        limit: 10,
      },
    });
    console.log(response.data);
    // const jsonData = await response.json();
    // return jsonData;
    return response.data;
  } catch (error: unknown) {
    console.log('api error occured', error);
  }
};
