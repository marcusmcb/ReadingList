const fetch = window.fetch

// click event handler for the edit book function

document.querySelector('#editBook').addEventListener('click', event => {
     event.preventDefault()
     fetch(`/books/${document.querySelector('#bookTitle').value}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify({
               title: document.querySelector('#bookTitle').value,
               author: document.querySelector('#bookAuthor').value,
               pages: document.querySelector('#bookPages').value,
               currentPage: document.querySelector('#currentPage').value,
               isRead: document.querySelector('#readBefore').checked
          })
     })
          .then(r => {
               console.log(r)
               window.location = './list'
          })
          .catch(e => console.error(e))
})
