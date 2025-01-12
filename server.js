const express = require("express");
const app = express();
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
