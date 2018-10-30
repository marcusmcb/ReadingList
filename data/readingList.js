// base book list array

let bookList = []

let selectedBook = {}

// calls the necessary function based on what the user selects

module.exports = {
     getAllBooks() {
          return bookList
     },
     getBook() {
          return selectedBook
     },
     addNewBook(book) {
          bookList.push(book)
     },
     updateBook(id, book) {
          const index = bookList.findIndex(bookItem => bookItem.id === id)
          bookList[index] = book
     },
     deleteBook(id) {
          const index = bookList.findIndex(bookItem => bookItem.id === id)
          bookList.splice(index, 1)
     },
     setBook(id) {
          const index = bookList.findIndex(bookItem => bookItem.id === id)
          selectedBook = bookList[index]
     }
}
