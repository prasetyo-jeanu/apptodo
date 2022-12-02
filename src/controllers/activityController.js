const { Activity } = require("../models");

async function all(req, rep) {
	const q = req.query;

	let r = { status: "Bad Request", data: {}, message: "Bad Request" };
	let httpCode = 400;

	try {
		const act = await Activity.findAll();
		httpCode = 200;
		r = {
			status: "Success",
			message: "Success",
			data: act,
		};
	} catch (err) {
		console.log(err);
		r.message = err.message;
	}

	return rep.code(httpCode).send(r);
}

async function create(req, rep) {
	const p = req.body;
	let r = { status: "Bad Request", message: "Bad Request", data: {} };
	let httpCode = 400;

	try {
		if (!p.email) {
			r.message = "email cannot be null";
		} else if (!p.title) {
			r.message = "title cannot be null";
		} else {
			const act = await Activity.create({
				email: p.email,
				title: p.title,
			});

			httpCode = 201;
			r = {
				status: "Success",
				message: "Success",
				data: act,
			};
		}
	} catch (err) {
		console.log(err);
		r.message = err.message;
	}

	return rep.code(httpCode).send(r);
}

async function update(req, rep) {
	const p = req.body;
	const id = req.params.id;
	let r = { status: "Bad Request", message: "Bad Request", data: {} };
	let httpCode = 400;

	try {
		if (!p.title) {
			r.message = "title cannot be null";
		} else if (!p.email) {
			r.message = "email cannot be null";
		} else if (!id) {
			r.message = "id cannot be null";
		} else {
			const activity = await Activity.update(
				{
					email: p.email,
					title: p.title,
				},
				{
					where: {
						id: id,
					},
				}
			);

			if (activity[0]) {
				const act = await Activity.findOne({
					where: { id: id },
				});

				httpCode = 200;
				r = {
					status: "Success",
					message: "Success",
					data: act,
				};
			} else {
				httpCode = 404;
				r.status = "Not Found";
				r.message = "Activity with ID " + id + " Not Found";
			}
		}
	} catch (err) {
		console.log(err);
		r.message = err.message;
	}

	return rep.code(httpCode).send(r);
}

async function show(req, rep) {
	const id = req.params.id;
	let r = { status: "Bad Request", message: "Bad Request", data: {} };
	let httpCode = 400;

	try {
		const act = await Activity.findOne({
			where: { id: id },
		});

		if (act) {
			httpCode = 200;
			r = {
				status: "Success",
				message: "Success",
				data: act,
			};
		} else {
			httpCode = 404;
			r.status = "Not Found";
			r.message = "Activity with ID " + id + " Not Found";
		}
	} catch (err) {
		console.log(err);
		r.message = err.message;
	}

	return rep.code(httpCode).send(r);
}

async function destroy(req, rep) {
	const id = req.params.id;
	let r = { status: "Bad Request", message: "Bad Request", data: {} };
	let httpCode = 400;

	try {
		const act = await Activity.destroy({
			where: { id: id },
		});

		if (act) {
			httpCode = 200;
			r.status = "Success";
			r.message = "Success";
		} else {
			httpCode = 404;
			r.status = "Not Found";
			r.message = "Activity with ID " + id + " Not Found";
		}
	} catch (err) {
		console.log(err);
		r.message = err.message;
	}

	return rep.code(httpCode).send(r);
}

module.exports = { all, create, update, show, destroy };
