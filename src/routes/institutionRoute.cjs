const {
	create,
	update,
	all,
	show,
	destroy,
} = require("../controllers/institutionController");
const auth = require("../middleware/auth");
const permission = require("../middleware/permissions");
const baseurl = "/api/institution";

const routes = [
	{
		method: "POST",
		url: baseurl,
		handler: create,
		preHandler: [auth, permission],
	},
	{
		method: "PUT",
		url: baseurl + "/:id",
		handler: update,
		preHandler: [auth, permission],
	},
	{
		method: "GET",
		url: baseurl,
		handler: all,
		preHandler: [auth, permission],
	},
	{
		method: "GET",
		url: baseurl + "/:id",
		handler: show,
		preHandler: [auth, permission],
	},
	{
		method: "DELETE",
		url: baseurl + "/:id",
		handler: destroy,
		preHandler: [auth, permission],
	},
];

module.exports = routes;
