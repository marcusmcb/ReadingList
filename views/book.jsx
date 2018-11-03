const React = require('react')
const Fragment = React.Fragment

const Book = props =>
  <Fragment>
    <div className="container mb-4">
    <li id='bookTitle' data-booktitle={props.title} className='list-group-item text-dark'>Book Title: {props.title}</li>
    <li id='bookAuthor' data-bookauthor={props.author} className='list-group-item'>Author: {props.author}</li>
    <li id='bookPages' data-bookpages={props.pages} className='list-group-item'>Page Count: {props.pages}</li>
    <li id='bookCurrentPage' data-bookcurrentpage={props.currentPage} className='list-group-item'>Current Pages Read: {props.currentPage}</li>

    <li id='bookIsRead' data-bookisread={props.isRead} className='list-group-item'>{props.isRead ? 'I have read this book.' : 'I have not read this book.'}</li>

    <li className='list-group-item'><button className='btn btn-secondary' id='editBTN' data-id={props.title}>Edit This Book</button> <button className='btn btn-danger' id='deleteBTN' data-id={props.title}>Delete This Book</button></li>

    
    </div>
  </Fragment>

module.exports = Book
