// variables for setting up the initial reading list array

let books = []
let selectedBook = {}

// sets up functionality for retreiving, adding, updating and deleting book entries

module.exports = {
  getBooks () {
    return books
  },
  setBook (id) {
    const index = books.findIndex(bookThing => bookThing.id === id)
    selectedBook = books[index]
  },
  getBook () {
    return selectedBook
  },
  addBook (book) {
    books.push(book)
  },
  updateBook (id, book) {
    const index = books.findIndex(bookThing => bookThing.id === id)
    books[index] = book
  },
  deleteBook (id) {
    const index = books.findIndex(bookThing => bookThing.id === id)
    books.splice(index, 1)
  }
}
