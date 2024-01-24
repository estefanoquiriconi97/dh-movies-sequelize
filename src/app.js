const express = require("express");
const path = require("path");
const methodOverride = require('method-override')

const indexRouter = require("./routes/index.routes");

const moviesRoutes = require("./routes/movies.routes");
const genresRoutes = require("./routes/genres.routes");
const actorsRoutes = require("./routes/actors.routes");
const seriesRoutes = require("./routes/series.routes");

const app = express();

// view engine setup
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/movies", moviesRoutes);
app.use("/genres", genresRoutes);
app.use("/actors", actorsRoutes);
app.use("/series", seriesRoutes);

app.listen("3001", () => console.log("http://localhost:" + 3001));
