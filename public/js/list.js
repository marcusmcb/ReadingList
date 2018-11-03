const fetch = window.fetch

// click event handler for edit function

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'editBTN') {
    fetch(`/books/${event.target.getAttribute('data-id')}`)
      .then(r => {
        console.log(r)
        window.location = './book'
      })
      .catch(e => console.error(e))

// click event handler for delete function

  } else if (event.target && event.target.id === 'deleteBTN') {
    fetch(`/books/${event.target.getAttribute('data-id')}`, { method: 'DELETE' })
      .then(r => {
        console.log(r)
        window.location = './list'
      })
  }
})
