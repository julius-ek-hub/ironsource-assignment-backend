const env = (key) => process.env[key];

module.exports = (req, res, next) => {
	["ALLOWED_ORIGIN_production", "ALLOWED_ORIGIN_development"].map((Origin) => {
		res.setHeader("Access-Control-Allow-Origin", env(Origin));
	});
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Methods", "*");
	next();
};
