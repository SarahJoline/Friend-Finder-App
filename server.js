const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./app/data/friends.js"));
app.use(express.static("./app/public"));

const apiRoutes = require("./app/routing/apiRoutes");
app.use("/api", apiRoutes);

const htmlRoutes = require("./app/routing/htmlRoutes");
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
