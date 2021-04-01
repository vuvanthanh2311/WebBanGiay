var path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { join } = require('path');
const { urlencoded } = require('express');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// connect db
db.connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
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
