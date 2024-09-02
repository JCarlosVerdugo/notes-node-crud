const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

// Initialization
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}))

// Global Variables

// Routes
app.use('/', require('./routes/index'));
app.use('/notes', require('./routes/notes'));
app.use('/users', require('./routes/users'));

// Static Files
app.use(express.static( path.join( __dirname, 'public') ));

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});