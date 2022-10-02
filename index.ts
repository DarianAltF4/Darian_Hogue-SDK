import axios from 'axios';

const API = 'https://the-one-api.dev/v2';

interface Options {
  limit?: number,
  page?: number,
  offset?: number,
  sort?: [string, string],
  match?: string,
  negateMatch?: string,
  include?: string,
  exclude?: string,
  exists?: string,
  noExists?: string,
  regex?: string,
  lessThan?: [string, number],
  greaterThan?: [string, number],
  equalTo?: [string, number]
}

function callAPI(apiKey: string, path: string, options?: Options, id?: string, endpoint?: string): Promise<object> {
  if (options) {
    /*
    Ran out of time here. At this point, I would create different routes based on
    the options that were provided and return it to the user as a promise.
    */
  }
  return new Promise((resolve, reject) => {
    axios.get(
      `${API}/${path}/${id || ''}/${endpoint || ''}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    ).then((response) => {
      resolve(response.data.docs);
    }).catch((err) => {
      reject(err);
    });
  });
}

export function getAllBooks(apiKey: string, options?: Options): Promise<object> {
  if (options) {
    return callAPI(apiKey, 'book', options);
  }
  return callAPI(apiKey, 'book');
}

export function getBookById(apiKey: string, id: string, options?: Options): Promise<object> {
  if (options) {
    return callAPI(apiKey, 'book', options, id);
  }
  return callAPI(apiKey, 'book', {}, id);
}

export function getAllBookChaptersById(apiKey: string, id: string, options?: Options): Promise<object> {
  if (options) {
    return callAPI(apiKey, 'book', options, id, 'chapter');
  }
  return callAPI(apiKey, 'book', {}, id, 'chapter');
}

export function getAllMovies(apiKey: string, options?: Options): Promise<object> {
  if (options) {
    return callAPI(apiKey, 'movie', options);
  }
  return callAPI(apiKey, 'movie');
}

export function getMovieById(apiKey: string, id: string, options?: Options): Promise<object> {
  if (options) {
    return callAPI(apiKey, 'movie', options, id);
  }
  return callAPI(apiKey, 'movie', {}, id);
}

export function getAllQuotesForMovie(apiKey: string, id: string, options?: Options): Promise<object> {
  if (options) {
    return callAPI(apiKey, 'movie', options, id, 'quote');
  }
  return callAPI(apiKey, 'movie', {}, id, 'quote');
}

export function getAllCharacters(apiKey: string, options?: Options): Promise<object> {
  if (options) {
    return callAPI(apiKey, 'character', options);
  }
  return callAPI(apiKey, 'character');
}

export function getCharacterById(apiKey: string, id: string, options?: Options): Promise<object> {
  if (options) {
    return callAPI(apiKey, 'character', options, id);
  }
  return callAPI(apiKey, 'character', {}, id);
}

export function getAllCharacterQuotesById(apiKey: string, id: string, options?: Options): Promise<object> {
  if (options) {
    return callAPI(apiKey, 'character', options, id, 'quote');
  }
  return callAPI(apiKey, 'character', {}, id, 'quote');
}

export function getAllQuotes(apiKey: string, options?: Options): Promise<object> {
  if (options) {
    return callAPI(apiKey, 'quote', options);
  }
  return callAPI(apiKey, 'quote');
}

export function getQuoteById(apiKey: string, id: string, options?: Options): Promise<object> {
  if (options) {
    return callAPI(apiKey, 'quote', options, id);
  }
  return callAPI(apiKey, 'quote', {}, id);
}

export function getAllChapters(apiKey: string, options?: Options): Promise<object> {
  if (options) {
    return callAPI(apiKey, 'chapter', options);
  }
  return callAPI(apiKey, 'chapter');
}

export function getChapterById(apiKey: string, id: string, options?: Options): Promise<object> {
  if (options) {
    return callAPI(apiKey, 'chapter', options, id);
  }
  return callAPI(apiKey, 'chapter', {}, id);
}

export default {
  getAllBooks,
  getBookById,
  getAllBookChaptersById,
  getAllMovies,
  getMovieById,
  getAllQuotesForMovie,
  getAllCharacters,
  getCharacterById,
  getAllCharacterQuotesById,
  getAllQuotes,
  getQuoteById,
  getAllChapters,
  getChapterById
};
