var path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { join } = require('path');
const { urlencoded } = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')

var ls = require('local-storage');
const app = express();
const port = 3000;

dotenv.config();

const route = require('./routes');
const db = require('./config/db');


// connect db
db.connect();

if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }


app.use(cookieParser())

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resourses/views'));
console.log(path.join(__dirname, 'resourses/views'));

route(app);

app.listen(port, () => {
    console.log(` App listening at http://localhost:${port}`);
});
