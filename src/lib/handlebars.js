const { format } = require('timeago.js'); 

const helpers = {};

helpers.timeago = (create_at) => {
    return format(create_at);
};

module.exports = helpers;