require("dotenv").config();

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { register, login } = require("./utils/");
const { Account } = require("./models/");
const { connection } = require("./connection");

const argv = yargs(hideBin(process.argv)).argv;

async function main() {
    try {
        await connection.authenticate();
        await Account.sync({alter: true});

        if (argv.register) {
            await register(argv);
        } else if (argv.login) {
            await login(argv);
        }
        await connection.close();
    } catch (error) {
        console.error(error);
    }

    process.exit();
}

main();