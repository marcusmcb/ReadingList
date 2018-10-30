// brings in React dependency

const React = require('react')

// form for entering new book to the reading list

const Form = props =>
     <form>
          <div className='form-group'>
               <label htmlFor='bookTitle'>Title:</label>
               <input type='text' className='form-control' id='bookTitle' aria-describedby='emailHelp' placeholder={props.title ? '' : 'The Lord of The Rings'} value={props.title ? props.title : ''} />
          </div>
          <div className='form-group'>
               <label htmlFor='bookAuthor'>Author:</label>
               <input type='text' className='form-control' id='bookAuthor' placeholder={props.author ? '' : 'J.R.R Tolkien'} value={props.author ? props.author : ''} />
          </div>
          <div className='form-group'>
               <label htmlFor='bookPages'>Page Count:</label>
               <input type='number' className='form-control' id='bookPages' placeholder={props.pages ? '' : '521'} value={props.pages ? props.pages : ''} />
          </div>
          <div className='form-group'>
               <label htmlFor='currentPage'>Current Page:</label>
               <input type='number' className='form-control' id='currentPage' placeholder={props.currentPage ? '' : '51'} value={props.currentPage ? props.currentPage : ''} />
          </div>
          <div className='form-check'>
               <input type='checkbox' className='form-check-input' id='readBefore' checked={!!props.isRead} />
               <label className='form-check-label' htmlFor='readBefore'>I Read This Book Before</label>
          </div>
          {props.title ? <button type='submit' id='editBook' className='btn btn-warning'>Edit Book</button> : <button type='submit' id='addBook' className='btn btn-primary'>Add Book</button>}
     </form>

module.exports = Form