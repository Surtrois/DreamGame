const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3032;
const sequelize = require('./config/database.config')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/images', express.static('public/images'));


app.use('/categorie', require('./src/routes/categorie.routes'))
app.use('/user', require('./src/routes/user.routes'))
app.use('/new',require('./src/routes/new.routes'))

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        console.log(`Example app listening at http://localhost:${port}`);
    } catch (error) {
        console.log('Unable to connect to the database', error);
    }
});