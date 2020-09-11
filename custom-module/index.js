
const axios = require('axios');

const config = require('./config.json');

exports.dict = async query => {
    
    // console.log(query)
    const dictUrl = `${config.url}${query}?key=${config.key}`;
    // console.log(dictUrl)
    try {
        const result  = await axios.get(dictUrl);
        return result;
    } catch (error) {
        return error;
    }
};


