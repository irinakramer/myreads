# MyReads 

Project 1 from the Udacity React Nanodegree


## Description

MyReads project is built with React. It is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.

The main page also has a link to `/search`, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. 


## Prerequisite & Installation

To get started:

* clone this repository with `git clone https://github.com/irinakramer/myreads.git`
* install all project dependencies with `npm install`
* start the development server with `npm start`

Project will be viewable in the browser at `http://localhost:3000/`.


### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Demo

Main page:

![Myreads - main page](/src/public/screenshot_myreads_main.png?raw=true "Myreads - main page")


Search page:

![Myreads - search page](/src/public/screenshot_myreads_search.png?raw=true "Myreads - search page")


## Author

Code is created by Irina Kramer, using starter code by Udacity [reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter).