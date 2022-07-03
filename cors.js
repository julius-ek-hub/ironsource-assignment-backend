const env = (key) => process.env[key];

module.exports = (req, res, next) => {
	const ALLOWED_ORIGIN = env(`ALLOWED_ORIGIN_${env("NODE_ENV")}`);

	res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Methods", "*");
	next();
};
