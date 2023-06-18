import { Sequelize } from 'sequelize-typescript';
const { Umzug, SequelizeStorage } = require('umzug');


const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: '',
    password: '',
    database: 'centralecredit'
});
// console.log('sequelize', sequelize);

const umzug = new Umzug({
    migrations: { glob: 'src/migrations/*.ts' },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
    logging: false
});

const task = (process.argv[2] || '').trim();

switch (task) {
    case 'up':
        umzug.up().then((migrations) => {
            console.log('Migrations Up performed!', migrations);
            process.exit(0);
        }
        ).catch((err) => {
            console.log('Error performing migrations', err);
            process.exit(1);
        }
        );
        break;
    case 'down':
        umzug.down().then((migrations) => {
            console.log('Migrations Down performed!', migrations);
            process.exit(0);
        }
        ).catch((err) => {
            console.log('Error performing migrations', err);
            process.exit(1);
        }
        );
        break;
    default:
        break;
}