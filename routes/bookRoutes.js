const books = require('../data/readingList')

// sets up "restful routing" for the application

module.exports = (app) => {
  
  app.get('/books', (req, res) => res.json(books.getBooks()))
  
  app.post('/books', (req, res) => {
    res.sendStatus(200)
    books.addBook(req.body)
  })

  app.get('/books/:id', (req, res) => {
    books.setBook(req.params.id)
    res.sendStatus(200)
  })

  app.put('/books/:id', (req, res) => {
    books.updateBook(req.params.id, req.body)
    res.sendStatus(200)
  })

  app.delete('/books/:id', (req, res) => {
  res.sendStatus(200)
  books.deleteBook(req.params.id)
  })
}
