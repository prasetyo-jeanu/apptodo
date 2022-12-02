console.log(new Date().toString());

const fastify = require("fastify")({
	logger: false,
});
require("dotenv").config();

const allroutes = require("./src/routes");

fastify.register(require("@fastify/cors"), {
	origin: "*",
});

// Declare a route
fastify.get("/", async (request, reply) => {
	return {
		status: "success",
		data: null,
		message: "API by PRASETYO",
	};
});

allroutes.forEach((route) => {
	fastify.route(route);
});

fastify.setErrorHandler(function (error, request, reply) {
	if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
		reply
			.status(500)
			.send({
				status: "Internal server error",
				data: null,
				message: "server error",
			});
	}
});

// Run the server!
const port = process.env.APP_PORT || 3030;
const start = async () => {
	try {
		fastify.listen({ port: port, host: "0.0.0.0" }, function (err, address) {
			if (err) {
				fastify.log.error(err);
				process.exit(1);
			}
			console.log("app runing on", address);
		});
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
start();
