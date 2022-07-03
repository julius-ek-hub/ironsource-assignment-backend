const mongoose = require("mongoose");

const env = (key) => process.env[key];

module.exports = (req, res, next) => {
	if (mongoose.connection.readyState !== 0) return next();

	const CONECTION_STRING = env(`DB_CONNECTION_STRING_${env("NODE_ENV")}`);

	mongoose.connect(CONECTION_STRING, null, (err) => {
		if (err) return res.status(500).end("Could not connect to database");
		next();
	});
};
