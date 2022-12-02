const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

let allroutes = [
	{
		method: "GET",
		url: "/api/",
		handler: function (req, res) {
			res.send({
				status: "success",
				data: null,
				message: "API by PRASETYO",
			});
		},
	},
];

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 &&
			file !== basename &&
			file.slice(-3) === ".js" &&
			file.indexOf("index") !== 0
		);
	})
	.forEach((file) => {
		const data = require(path.join(__dirname, file));
		allroutes.push(...data);
	});

module.exports = allroutes;
