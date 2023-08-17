const path = require('path');

const express = require('express');
require('dotenv').config();
require('colors');
const connectDB = require('./config/db');
const cors = require('cors');

const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: '',
    graphiql: process.env.NODE_ENV === 'development',
  })
);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'client', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => res.send('server is ready'));
}

(async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();
