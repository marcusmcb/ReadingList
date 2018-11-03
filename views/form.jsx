// adds React NPM dependency

const React = require('react')

// HTML elements for the book add form

const Form = props =>
  <form>
    <div className='form-group'>
      <label htmlFor='bookTitle'>Book Title:</label>
      <input type='text' className='form-control' id='bookTitle' value={props.title ? props.title : ''} />
    </div>
    <div className='form-group'>
      <label htmlFor='bookAuthor'>Author:</label>
      <input type='text' className='form-control' id='bookAuthor' value={props.author ? props.author : ''} />
    </div>
    <div className='form-group'>
      <label htmlFor='bookPages'>Total Page Count:</label>
      <input type='number' className='form-control' id='bookPages' value={props.pages ? props.pages : ''} />
    </div>
    <div className='form-group'>
      <label htmlFor='currentPage'>Current Pages Read:</label>
      <input type='number' className='form-control' id='currentPage' value={props.currentPage ? props.currentPage : ''} />
    </div>
    <div className='form-check'>
      <input type='checkbox' className='form-check-input' id='readBefore' checked={!!props.isRead} />
      <label className='form-check-label mb-3' htmlFor='readBefore'>I have read this book before.</label>
    </div>
    {props.title ? <button type='submit' id='editBook' className='btn btn-secondary'>Edit Book</button> : <button type='submit' id='addBook' className='btn btn-primary'>Add Book</button>}
  </form>

module.exports = Form
