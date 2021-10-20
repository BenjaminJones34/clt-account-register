const { Account } = require("../models");
const bcrypt = require("bcrypt");

async function register({saltRounds, username, password}) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    await Account.create({username, password: hash});
}

async function login({username, password}) {
    const accounts = await Account.findAll({attributes: ["id", "username", "password"]});
    const account = accounts.find((account) => account.username == username);
    console.log(await bcrypt.compare(password, account.password));
}

module.exports = { register, login };