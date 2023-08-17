const express = require('express');
require('dotenv').config();
require('colors');
const connectDB = require('./config/db');

const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');

const port = process.env.PORT || 5000;

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: '',
    graphiql: process.env.NODE_ENV === 'development',
  })
);

(async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();
