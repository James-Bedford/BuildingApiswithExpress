const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes");

let app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes); // /api - could be anything - myfavpath for example!

app.listen(4000);
