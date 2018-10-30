// brings in required dependencies

const books = require('../data/readingList')

// sets up routing for the various pages

module.exports = (app) => {

     app.get('/', (req, res) => {
          res.render('index')
     })

     app.get('/list', (req, res) => res.render('list', { list: books.getBooks() }))
     
     app.get('/book', (req, res) => {
          res.render('bookEdit', books.getBook())
     })
}