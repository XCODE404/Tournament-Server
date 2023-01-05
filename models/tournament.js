const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Tournament extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Tournament.init({
		tid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: DataTypes.STRING,
		date: DataTypes.DATE,
		organizer: DataTypes.STRING,
		streamer: DataTypes.STRING,
		remark: DataTypes.STRING,
		del_flg: DataTypes.BOOLEAN
	}, {
		sequelize,
		freezeTableName: true,
		modelName: 'Tournament',
	});
	return Tournament;
};