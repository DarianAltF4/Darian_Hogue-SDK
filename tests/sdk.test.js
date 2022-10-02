require('dotenv').config();
const axios = require('axios');

const sdk = require('../index.js');

const apiKey = process.env.API_KEY;
const API = 'https://the-one-api.dev/v2';
const bookId = '5cf5805fb53e011a64671582';
const movieId = '5cd95395de30eff6ebccde56';
const characterId = '5cd99d4bde30eff6ebccfbbe';
const quoteId = '5cd96e05de30eff6ebcce7e9';
const chapterId = '6091b6d6d58360f988133b8b';

const axiosCall = (path, id, endpoint) => {
  return axios.get(`${API}/${path}/${id || ''}/${endpoint || ''}`, { headers: { Authorization: `Bearer ${apiKey}` } })
    .then((res) => {
      return res.data.docs;
    })
    .catch((err) => {
      return err;
    });
};

describe('Book Tests', () => {
  test('Should get list of all book names', () => {
    return sdk.getAllBooks(apiKey)
      .then((sdkData) => {
        axiosCall('book')
          .then((apiData) => {
            expect(sdkData).toMatchObject(apiData);
          })
          .catch((err) => {
            expect(err).toBe('No Axios Error');
          });
      })
      .catch((err) => {
        expect(err).toBe('No SDK Error: getAllBooks');
      });
  });

  test('Should get book by id', () => {
    return sdk.getBookById(apiKey, bookId)
      .then((sdkData) => {
        axiosCall('book', bookId)
          .then((apiData) => {
            expect(sdkData).toMatchObject(apiData);
          })
          .catch((err) => {
            expect(err).toBe('No Axios Error');
          });
      })
      .catch((err) => {
        expect(err).toBe('No SDK Error: getBookById');
      });
  });

  test('Should get all chapters for selected book id', () => {
    return sdk.getAllBookChaptersById(apiKey, bookId)
      .then((sdkData) => {
        axiosCall('book', bookId, 'chapter')
          .then((apiData) => {
            expect(sdkData).toMatchObject(apiData);
          })
          .catch((err) => {
            expect(err).toBe('No Axios Error');
          });
      })
      .catch((err) => {
        expect(err).toBe('No SDK Error: getAllBookChaptersById');
      });
  });
});

describe('Movie Tests', () => {
  test('Should get all movies', () => {
    return sdk.getAllMovies(apiKey)
      .then((sdkData) => {
        axiosCall('movie')
          .then((apiData) => {
            expect(sdkData).toMatchObject(apiData);
          })
          .catch((err) => {
            expect(err).toBe('No Axios Error');
          });
      })
      .catch((err) => {
        expect(err).toBe('No SDK Error: getAllMovies');
      });
  });

  test('Should get movie by id', () => {
    return sdk.getMovieById(apiKey, movieId)
      .then((sdkData) => {
        axiosCall('movie', movieId)
          .then((apiData) => {
            expect(sdkData).toMatchObject(apiData);
          })
          .catch((err) => {
            expect(err).toBe('No Axios Error');
          });
      })
      .catch((err) => {
        expect(err).toBe('No SDK Error: getMovieById');
      });
  });

  test('Should get all movie quotes for selected movie id', () => {
    return sdk.getAllQuotesForMovie(apiKey, movieId)
      .then((sdkData) => {
        axiosCall('movie', movieId, 'quote')
          .then((apiData) => {
            expect(sdkData).toMatchObject(apiData);
          })
          .catch((err) => {
            expect(err).toBe('No Axios Error');
          });
      })
      .catch((err) => {
        expect(err).toBe('No SDK Error: getAllQuotesForMovie');
      });
  });
});

describe('Character Tests', () => {
  test('Should get list of all characters', () => {
    return sdk.getAllCharacters(apiKey)
      .then((sdkData) => {
        axiosCall('character')
          .then((apiData) => {
            expect(sdkData).toMatchObject(apiData);
          })
          .catch((err) => {
            expect(err).toBe('No Axios Error');
          });
      })
      .catch((err) => {
        expect(err).toBe('No SDK Error: getAllCharacters');
      });
  });

  test('Should get character by id', () => {
    return sdk.getCharacterById(apiKey, characterId)
      .then((sdkData) => {
        axiosCall('character', characterId)
          .then((apiData) => {
            expect(sdkData).toMatchObject(apiData);
          })
          .catch((err) => {
            expect(err).toBe('No Axios Error');
          });
      })
      .catch((err) => {
        expect(err).toBe('No SDK Error: getCharacterById');
      });
  });

  test('Should get all quotes for selected character', () => {
    return sdk.getAllCharacterQuotesById(apiKey, characterId)
      .then((sdkData) => {
        axiosCall('character', characterId, 'quote')
          .then((apiData) => {
            expect(sdkData).toMatchObject(apiData);
          })
          .catch((err) => {
            expect(err).toBe('No Axios Error');
          });
      })
      .catch((err) => {
        expect(err).toBe('No SDK Error: getAllCharacterQuotesById');
      });
  });
});

describe('Quotes Tests', () => {
  test('Should get list of all quotes', () => {
    return sdk.getAllQuotes(apiKey)
      .then((sdkData) => {
        axiosCall('quote')
          .then((apiData) => {
            expect(sdkData).toMatchObject(apiData);
          })
          .catch((err) => {
            expect(err).toBe('No Axios Error');
          });
      })
      .catch((err) => {
        expect(err).toBe('No SDK Error: getAllQuotes');
      });
  });

  test('Should get quote by id', () => {
    return sdk.getQuoteById(apiKey, quoteId)
      .then((sdkData) => {
        axiosCall('quote', quoteId)
          .then((apiData) => {
            expect(sdkData).toMatchObject(apiData);
          })
          .catch((err) => {
            expect(err).toBe('No Axios Error');
          });
      })
      .catch((err) => {
        expect(err).toBe('No SDK Error: getQuoteById');
      });
  });
});

describe('Chapter Tests', () => {
  test('Should get list of all book chapters', () => {
    return sdk.getAllChapters(apiKey)
      .then((sdkData) => {
        axiosCall('chapter')
          .then((apiData) => {
            expect(sdkData).toMatchObject(apiData);
          })
          .catch((err) => {
            expect(err).toBe('No Axios Error');
          });
      })
      .catch((err) => {
        expect(err).toBe('No SDK Error: getAllChapters');
      });
  });

  test('Should get chapter by selected id', () => {
    return sdk.getChapterById(apiKey, chapterId)
      .then((sdkData) => {
        axiosCall('chapter', chapterId)
          .then((apiData) => {
            expect(sdkData).toMatchObject(apiData);
          })
          .catch((err) => {
            expect(err).toBe('No Axios Error');
          });
      })
      .catch((err) => {
        expect(err).toBe('No SDK Error: getChapterById');
      });
  });
});
