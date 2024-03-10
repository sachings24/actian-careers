const axios = require('axios');
const logger = require('../logger/logger');
const error_message = require('../utils/errorcode').ERROR_MESSAGES;
var util = require('util')

const axiosInstance = axios.create({
    baseURL: "https://www.actian.com", //process.env.ACTIAN_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Define an async function to make a GET request
async function fetchData(endpoint) {
    try {
        const response = await axiosInstance.get(endpoint);
        return response.data;
    } catch (error) {
        logger.error(`${error_message.apiCallError}: ${error.message}`);
        throw error;
    }
}

module.exports = {
    fetchData
};
