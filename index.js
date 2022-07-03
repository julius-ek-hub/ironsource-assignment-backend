require("dotenv").config();

const cors = require("./cors");
const db = require("./db");
const express = require("express");
const routeHandler = require("./route");
const app = express();

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(db);
app.use("/api/contacts", routeHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
