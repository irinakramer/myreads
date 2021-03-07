import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'

/** Class representing top level Books App */
class BooksApp extends React.Component {

// TODO: lift state up from Home and Search pages:
// https://stackoverflow.com/questions/50616080/how-to-pass-state-in-react-router-to-components
/* <Route path="/about" render={()=> <About parentState={this.state} />} /> */
// And you can access them in About component like
// this.props.parentState.main // should render "Drizzle"

state = {
  books: []
}

componentDidMount() {
  BooksAPI.getAll()
    .then(res => {
      this.setState(() => ({ 
        books: res 
      }))
    })
}

updateBook = (book, shelf) => {
  BooksAPI.update(book, shelf)
    .then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
}


// TODO: move updateBook here

// TODO: add books not found component

  /**
  * @description Render routes for root "/" and "/search" page
  */
  render() {
    return (
      <div>
        <Route exact path="/" render={()=> <HomePage parentState={this.state} updateBook={this.updateBook} />}  />
        <Route exact path="/search" component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
