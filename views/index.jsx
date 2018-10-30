// brings in Node dependencies

const React = require('react')
const Form = require('./form')

// HTML for nav component and form dependency

<html lang="en">
<head>
     <meta charset="UTF-8"/>
     <meta name="viewPort" content="width=device-width, initial-scale=1.0"/>
     <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
     <title>Reading List</title>
</head>
<body>

     <nav aria-label='Page navigation example'>
          <ul className='pagination'>
               <li className='page-item active'><a className='page-link' href='/'>Add Book</a></li>
               <li className='page-item'><a className='page-link' href='/list'>Reading List</a></li>
          </ul>
     </nav>
     <Form />
     <script src='/js/index.js' />
     
</body>
</html>