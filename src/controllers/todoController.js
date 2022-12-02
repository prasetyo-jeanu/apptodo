const { Todo } = require("../models");

async function all(req, rep) {
	const activity_group_id = req.query.activity_group_id;

	let filter = {};
	if (activity_group_id) {
		filter = {
			where: {
				activity_group_id: activity_group_id,
			},
		};
	}

	let r = { status: "Bad Request", data: {}, message: "Bad Request" };
	let httpCode = 400;

	try {
		const todo = await Todo.findAll(filter);
		if (todo.length) {
			httpCode = 200;
			r = {
				status: "Success",
				message: "Success",
				data: todo,
			};
		} else {
			httpCode = 404;
			r.status = "Not Found";
			r.message = "Todo Item Not Found";
		}
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
		if (!p.activity_group_id) {
			r.message = "activity_group_id cannot be null";
		} else if (!p.title) {
			r.message = "title cannot be null";
		} else {
			const todo = await Todo.create({
				activity_group_id: p.activity_group_id,
				title: p.title,
				is_active: p.is_active ? p.is_active : 1,
				priority: p.priority ? p.priority : "very-high",
			});

			httpCode = 201;
			r = {
				status: "Success",
				message: "Success",
				data: todo,
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
		} else if (!id) {
			r.message = "id cannot be null";
		} else {
			const todo = await Todo.update(
				{
					priority: p.priority,
					title: p.title,
				},
				{
					omitNull: true,
					where: {
						id: id,
					},
				}
			);

			if (todo[0]) {
				const td = await Todo.findOne({
					where: { id: id },
				});

				httpCode = 200;
				r = {
					status: "Success",
					message: "Success",
					data: td,
				};
			} else {
				httpCode = 404;
				r.status = "Not Found";
				r.message = "Todo Item with ID " + id + " Not Found";
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
		const todo = await Todo.findOne({
			where: { id: id },
		});

		if (todo) {
			httpCode = 200;
			r = {
				status: "Success",
				message: "Success",
				data: todo,
			};
		} else {
			httpCode = 404;
			r.status = "Not Found";
			r.message = "Todo Item with ID " + id + " Not Found";
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
		const act = await Todo.destroy({
			where: { id: id },
		});

		if (act) {
			httpCode = 200;
			r.status = "Success";
			r.message = "Success";
		} else {
			httpCode = 404;
			r.status = "Not Found";
			r.message = "Todo Item with ID " + id + " Not Found";
		}
	} catch (err) {
		console.log(err);
		r.message = err.message;
	}

	return rep.code(httpCode).send(r);
}

module.exports = { all, create, update, show, destroy };
