# Darian Hogue SDK Design

## Description

This is an SDK that allows you to easily interact with [The One API](https://the-one-api.dev/). A fan made Lord of The Rings API.
<br>
<br>
<br>
<br>

## Options Object (All params are optional)

<br>
limit: number<br>
page: number<br>
offset: number<br>
sort: [string, string]<br>
&nbsp;&nbsp;&nbsp;&nbsp;[key, 'asc' | 'desc']<br>
match: string<br>
negateMatch: string<br>
include: string<br>
exclude: string<br>
exists: string<br>
noExists: string<br>
regex: string<br>
lessThan: [string, number]<br>
&nbsp;&nbsp;&nbsp;&nbsp;[key, number to compare to]<br>
greaterThan: [string, number]<br>
&nbsp;&nbsp;&nbsp;&nbsp;[key, number to compare to]<br>
equalTo: [string, number]<br>
&nbsp;&nbsp;&nbsp;&nbsp;[key, number to compare to]<br>

## Methods

.getAllBooks(apiKey [,options])<br>
&nbsp;&nbsp;&nbsp;&nbsp;_List of all "The Lord of the Rings" books_<br>

.getBookById(apiKey, id [,options])<br>
&nbsp;&nbsp;&nbsp;&nbsp;_Request one specific book_<br>

.getAllBookChaptersById(apiKey, id [,options])<br>
&nbsp;&nbsp;&nbsp;&nbsp;_Request all chapters of one specific book_<br>

.getAllMovies(apiKey [,options])<br>
&nbsp;&nbsp;&nbsp;&nbsp;_List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies_<br>

.getMovieById(apiKey, id [,options])<br>
&nbsp;&nbsp;&nbsp;&nbsp;_Request one specific movie_<br>

.getAllQuotesForMovie(apiKey, id [,options])<br>
&nbsp;&nbsp;&nbsp;&nbsp;_Request all movie quotes for one specific movie (only working for the LotR trilogy)_<br>

.getAllCharacters(apiKey [,options])<br>
&nbsp;&nbsp;&nbsp;&nbsp;_List of characters including metadata like name, gender, realm, race and more_<br>

.getCharacterById(apikey, id [,options])<br>
&nbsp;&nbsp;&nbsp;&nbsp;_Request one specific character_<br>

.getAllCharacterQuotesById(apiKey, id [,options])<br>
&nbsp;&nbsp;&nbsp;&nbsp;_Request all movie quotes of one specific character_<br>

.getAllQuotes(apiKey [,options])<br>
&nbsp;&nbsp;&nbsp;&nbsp;_List of all movie quotes_<br>

.getQuoteById(apiKey, id [,options])<br>
&nbsp;&nbsp;&nbsp;&nbsp;_Request one specific movie quote_<br>

.getAllChapters(apiKey [,options])<br>
&nbsp;&nbsp;&nbsp;&nbsp;_List of all book chapters_<br>

.getChapterById(apiKey, id [,options])<br>
&nbsp;&nbsp;&nbsp;&nbsp;_Request one specific book chapter_<br>
