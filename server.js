// brings in NPM dependencies

const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()

// sets up views, routing and parsing dependencies

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.engine('jsx', require('express-react-views').createEngine())

require('./routes')(app)

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('http://localhost:3000'))
