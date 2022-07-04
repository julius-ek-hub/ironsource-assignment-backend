const mongoose = require("mongoose");

const schema = (obj) => new mongoose.Schema(obj);

const contactsSchema = schema({
	name: schema({
		title: {
			type: String,
			enum: ["Mr", "Ms", "Mrs", "Monsieur", "Miss", "Madame", "Mademoiselle"],
		},
		first: String,
		last: String,
	}),
	gender: { type: String, enum: ["Male", "Female"] },
	dob: schema({ date: Date, age: Number }),
	email: String,
	phone: String,
	picture: schema({ thumbnail: String, medium: String, large: String }),
	location: schema({
		street: schema({ number: Number, name: String }),
		city: String,
		state: String,
		country: String,
	}),
});

const Contact = mongoose.model("contact", contactsSchema);

module.exports = Contact;
