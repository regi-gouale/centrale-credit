import * as Sequelize from 'sequelize';

const tableName = 'users';

export async function up({context: queryInterface}) {
    
    await queryInterface.createTable(tableName, {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });
}

export async function down({context: queryInterface}) {
    await queryInterface.dropTable(tableName);
}
