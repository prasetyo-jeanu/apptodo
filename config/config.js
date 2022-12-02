module.exports = {
	database: {
		username: process.env.MYSQL_USER || "root",
		password: process.env.MYSQL_PASSWORD || null,
		database: process.env.MYSQL_DBNAME || "todo4",
		host: process.env.MYSQL_HOST || "127.0.0.1",
		port: process.env.MYSQL_PORT || "3306",
		dialect: "mysql",
	},
};
