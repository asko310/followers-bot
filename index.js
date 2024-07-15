require("dotenv").config();
const { IgApiClient } = require('instagram-private-api');
const { get } = require('request-promise');



index.js
const postToInsta = async () => {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
}