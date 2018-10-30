// brings in Node dependencies

const React = require('react')
const Fragment = React.Fragment

// HTML elements for individual book entries

const Book = props =>

     <Fragment>

          <li id="bookTitle" data-bookTitle={props.title} className="list-group-item">Title: {props.title}</li>

          <li id="bookAuthor" data-bookAuthor={props.author} className="list-group-item">Author: (props.author}</li>

          <li id="bookPages" data-bookPages={props.pages}
               className="list-group-item">Page Count: {props.pages}</li>

          <li id="bookCurrentPage" data-bookCurrentPage={props.currentPage} className="list-group-item">Current Page: {props.currentPage}</li>

          <li id="bookIsRead" data-bookIsRead={props.isRead} className='list-group-item'> {props.isRead ? 'Already read.' : 'Have not read yet.'}</li>

          <li className='list-group-item'>
               <button className='btn btn-warning' id='editBTN' data-id={props.title}>EDIT</button>
               <button className='btn btn-danger' id="deleteBTN" data-id={props.title}>DELETE</button> </li>

     </Fragment>