"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Activity extends Model {
		static associate({}) {}
	}

	Activity.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			title: {
				type: DataTypes.STRING,
			},
			email: {
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			tableName: "activity_groups",
			modelName: "Activity",
			paranoid: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
			deletedAt: "deleted_at",
		}
	);
	return Activity;
};
