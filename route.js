const express = require("express");
const Contact = require("./model");

const Router = express.Router();

const pickYear = (date = new Date()) => new Date(date).getFullYear();

const transformDOBToContainAge = function ({ _doc }) {
	const dob = _doc.dob._doc.date;
	return {
		..._doc,
		dob: { date: dob, age: pickYear() - pickYear(dob) },
	};
};

Router.get("/", async (req, res) => {
	try {
		const { page = 0, limit = 10 } = req.query;

		const result = await Contact.find()
			.transform((doc) => doc.map(transformDOBToContainAge))
			.skip(Number(page) * Number(limit))
			.limit(limit);
		res.send(result);
	} catch (e) {
		res.status(500).end("Internal server error");
	}
});

Router.post("/", async (req, res) => {
	try {
		const project = new Contact(req.body);
		await project.save();
		res.send(transformDOBToContainAge(project));
	} catch (e) {
		res.status(500).end("Internal server error");
	}
});

Router.put("/", async ({ body }, res) => {
	try {
		const updated = await Contact.findByIdAndUpdate(body._id, body, {
			new: true,
		});
		res.send(transformDOBToContainAge(updated));
	} catch (e) {
		res.status(500).end("Internal server error");
	}
});

Router.delete("/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		const deleted = await Contact.findByIdAndDelete(_id);
		res.send(deleted || {});
	} catch (e) {
		res.status(500).end("Internal server error");
	}
});

module.exports = Router;
