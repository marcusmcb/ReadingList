const React = require('react')
const Form = require('./form')

const Page = () =>

  <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <title>Reading List</title>
      <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO' crossOrigin='anonymous' />
    </head>
    <body>
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-center text-dark">Reading List</h1>
            <p className="lead text-center">Add books into your reading list.</p>
          </div>
          
              <nav className="navbar-light bg-light">
        <ul className='pagination justify-content-center'>
          <li className='page-item'><a className='page-link' href='/'>Add Book</a></li>
          <li className='page-item'><a className='page-link text-secondary' href='/list'>View Reading List</a></li>
        </ul>
      </nav>
      
      <Form />
      <script src='/js/index.js' />
      </div>
      </div>
    </body>
  </html>

module.exports = Page
