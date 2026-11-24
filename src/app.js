const express = require("express");
const kutyaRoutes = require("./routes/kutya.routes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(kutyaRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
