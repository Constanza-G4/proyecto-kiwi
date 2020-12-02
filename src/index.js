//Imports
const express = require('express'),
      exphbs = require('express-handlebars'),
      path = require('path'),
      morgan = require('morgan'),
      session = require('express-session'),
      sessionFileStore = require('session-file-store')

    

//Execute express
const app = express()
const FileStore = new sessionFileStore(session)


//Settings
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLauyout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/helpers.js')
}))

app.set('view engine', '.hbs')


//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(session({
    secret: 'Dango larva',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 31536000
    },
    store: new FileStore({
        path:`.sessions`,
        reapInterval: 10
    })

    
}))


//Routes
const INDEX = require('./routes/index')
const PET = require('./routes/pet')
const QUIZZ = require('./routes/quizzes')
app.use('/quiz',QUIZZ)
app.use('/', INDEX)
app.use('/mascota', PET)



//Public
app.use(express.static(path.join(__dirname, 'public')))

//Server
app.listen(8080, () => {
    console.log('Servidor OK en puerto 8080')

})