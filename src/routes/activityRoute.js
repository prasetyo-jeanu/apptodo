const {
	all,
	create,
	update,
	show,
	destroy,
} = require("../controllers/activityController");
const baseurl = "/activity-groups";

const routes = [
	{
		method: "POST",
		url: baseurl,
		handler: create,
	},
	{
		method: "PATCH",
		url: baseurl + "/:id",
		handler: update,
	},
	{
		method: "PUT",
		url: baseurl + "/:id",
		handler: update,
	},
	{
		method: "GET",
		url: baseurl,
		handler: all,
	},
	{
		method: "GET",
		url: baseurl + "/:id",
		handler: show,
	},
	{
		method: "DELETE",
		url: baseurl + "/:id",
		handler: destroy,
	},
];

module.exports = routes;
