"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChapterById = exports.getAllChapters = exports.getQuoteById = exports.getAllQuotes = exports.getAllCharacterQuotesById = exports.getCharacterById = exports.getAllCharacters = exports.getAllQuotesForMovie = exports.getMovieById = exports.getAllMovies = exports.getAllBookChaptersById = exports.getBookById = exports.getAllBooks = void 0;
const axios_1 = __importDefault(require("axios"));
const API = 'https://the-one-api.dev/v2';
function callAPI(apiKey, path, options, id, endpoint) {
    if (options) {
        /*
        Ran out of time here. At this point, I would create different routes based on
        the options that were provided and return it to the user as a promise.
        */
    }
    return new Promise((resolve, reject) => {
        axios_1.default.get(`${API}/${path}/${id || ''}/${endpoint || ''}`, { headers: { Authorization: `Bearer ${apiKey}` } }).then((response) => {
            resolve(response.data.docs);
        }).catch((err) => {
            reject(err);
        });
    });
}
function getAllBooks(apiKey, options) {
    if (options) {
        return callAPI(apiKey, 'book', options);
    }
    return callAPI(apiKey, 'book');
}
exports.getAllBooks = getAllBooks;
function getBookById(apiKey, id, options) {
    if (options) {
        return callAPI(apiKey, 'book', options, id);
    }
    return callAPI(apiKey, 'book', {}, id);
}
exports.getBookById = getBookById;
function getAllBookChaptersById(apiKey, id, options) {
    if (options) {
        return callAPI(apiKey, 'book', options, id, 'chapter');
    }
    return callAPI(apiKey, 'book', {}, id, 'chapter');
}
exports.getAllBookChaptersById = getAllBookChaptersById;
function getAllMovies(apiKey, options) {
    if (options) {
        return callAPI(apiKey, 'movie', options);
    }
    return callAPI(apiKey, 'movie');
}
exports.getAllMovies = getAllMovies;
function getMovieById(apiKey, id, options) {
    if (options) {
        return callAPI(apiKey, 'movie', options, id);
    }
    return callAPI(apiKey, 'movie', {}, id);
}
exports.getMovieById = getMovieById;
function getAllQuotesForMovie(apiKey, id, options) {
    if (options) {
        return callAPI(apiKey, 'movie', options, id, 'quote');
    }
    return callAPI(apiKey, 'movie', {}, id, 'quote');
}
exports.getAllQuotesForMovie = getAllQuotesForMovie;
function getAllCharacters(apiKey, options) {
    if (options) {
        return callAPI(apiKey, 'character', options);
    }
    return callAPI(apiKey, 'character');
}
exports.getAllCharacters = getAllCharacters;
function getCharacterById(apiKey, id, options) {
    if (options) {
        return callAPI(apiKey, 'character', options, id);
    }
    return callAPI(apiKey, 'character', {}, id);
}
exports.getCharacterById = getCharacterById;
function getAllCharacterQuotesById(apiKey, id, options) {
    if (options) {
        return callAPI(apiKey, 'character', options, id, 'quote');
    }
    return callAPI(apiKey, 'character', {}, id, 'quote');
}
exports.getAllCharacterQuotesById = getAllCharacterQuotesById;
function getAllQuotes(apiKey, options) {
    if (options) {
        return callAPI(apiKey, 'quote', options);
    }
    return callAPI(apiKey, 'quote');
}
exports.getAllQuotes = getAllQuotes;
function getQuoteById(apiKey, id, options) {
    if (options) {
        return callAPI(apiKey, 'quote', options, id);
    }
    return callAPI(apiKey, 'quote', {}, id);
}
exports.getQuoteById = getQuoteById;
function getAllChapters(apiKey, options) {
    if (options) {
        return callAPI(apiKey, 'chapter', options);
    }
    return callAPI(apiKey, 'chapter');
}
exports.getAllChapters = getAllChapters;
function getChapterById(apiKey, id, options) {
    if (options) {
        return callAPI(apiKey, 'chapter', options, id);
    }
    return callAPI(apiKey, 'chapter', {}, id);
}
exports.getChapterById = getChapterById;
exports.default = {
    getAllBooks,
    getBookById,
    getAllBookChaptersById,
    getAllMovies,
    getMovieById,
    getAllQuotesForMovie,
    getAllCharacters,
    getAllCharacterQuotesById,
    getAllQuotes,
    getQuoteById,
    getAllChapters,
    getChapterById
};
