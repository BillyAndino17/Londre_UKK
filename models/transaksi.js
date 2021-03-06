'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class transaksi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.detil_transaksi, {
                foreignKey: "id_transaksi",
                as: "transaksi"
            })

            this.belongsTo(models.member, {
                foreignKey: "id_member",
                as: "transaksi member"
            })

            this.belongsTo(models.user, {
                foreignKey: "id_user",
                as: "transaksi user"
            })

            this.belongsTo(models.outlet, {
                foreignKey: "id_outlet",
                as: "transaksi outlet"
            })
        }
    };
    transaksi.init({
        id_transaksi: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tgl: DataTypes.STRING,
        batas_waktu: DataTypes.STRING,
        tgl_bayar: DataTypes.STRING,
        status: DataTypes.STRING,
        dibayar: DataTypes.STRING,
        id_user: DataTypes.INTEGER,
        id_member: DataTypes.INTEGER,
        id_outlet: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'transaksi',
        tableName: 'transaksi',
    });
    return transaksi;
};