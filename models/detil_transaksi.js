'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class detil_transaksi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.detil_transaksi, {
                foreignKey: "id_transaksi",
                as: "transaksi"
            })
        }
    };
    detil_transaksi.init({
        id_detil_transaksi: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_transaksi: DataTypes.INTEGER,
        qty: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'detil_transaksi',
        tableName: 'detil_transaksi',
    });
    return detil_transaksi;
};