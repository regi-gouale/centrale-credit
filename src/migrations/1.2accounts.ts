import * as Sequelize from 'sequelize';

const tableName = 'accounts';

export async function up({ context: queryInterface }) {
    await queryInterface.createTable(tableName, {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        accountNumber: {
            type: Sequelize.STRING,
            allowNull: false
        },
        accountType: {
            type: Sequelize.STRING
        },
        accountBalance: {
            type: Sequelize.STRING,
            allowNull: false
        },
        accountStatus: {
            type: Sequelize.STRING,
            allowNull: false
        },
        accountOwner: {
            type: Sequelize.STRING,
            allowNull: false
        },
        accountOwnerEmail: {
            type: Sequelize.STRING,
            allowNull: false
        },
        accountOwnerPhone: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
}

export async function down({ context: queryInterface }) {
    await queryInterface.dropTable(tableName);
}
