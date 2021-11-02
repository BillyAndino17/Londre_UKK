'use strict';

const { sequelize } = require("../models");

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('detil_transaksi', {
            id_detil_transaksi: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            qty: {
                type: Sequelize.INTEGER
            },
            id_transaksi: {
                type: Sequelize.INTEGER,
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "transaksi",
                    key: "id_transaksi"
                }
            },
            id_paket: {
                type: Sequelize.INTEGER,
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "paket",
                    key: "id_paket"
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('detil_transaksi');
    }
};