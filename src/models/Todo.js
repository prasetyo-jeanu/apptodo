"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Todo extends Model {
		static associate({}) {}
	}

	Todo.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			activity_group_id: {
				type: DataTypes.INTEGER,
				get() {
					return this.getDataValue("activity_group_id")
						? this.getDataValue("activity_group_id").toString()
						: this.getDataValue("activity_group_id");
				},
			},
			title: {
				type: DataTypes.STRING,
			},
			is_active: {
				type: DataTypes.INTEGER,
				defaultValue: 1,
				get() {
					return this.getDataValue("is_active")
						? this.getDataValue("is_active").toString()
						: this.getDataValue("is_active");
				},
			},
			priority: {
				type: DataTypes.ENUM("very-high", "high", "medium", "low", "very-low"),
				defaultValue: "very-high",
			},
		},
		{
			sequelize,
			tableName: "todo_items",
			modelName: "Todo",
			paranoid: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
			deletedAt: "deleted_at",
		}
	);
	return Todo;
};
