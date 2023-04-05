const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRouter = require('./router/quiz');
const jobsheetRouter = require('./router/jobsheet');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require('./models');
db.sequelize.sync()

app.get('/', (req, res) => {
  res.send('Quiz ExpreessJS API by Peika');
});

app.use('/api/quizzes', quizRouter)
app.use('/api/jobsheet', jobsheetRouter)

app.listen(port, () => console.log('App listening on port http://localhost:' + port));

