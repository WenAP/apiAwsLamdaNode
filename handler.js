'use strict';

function hello(event, context, callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Hello world!',
    }),
  };
  return callback(null, response);
};

function bye(event, context, callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Bye world!',
    }),
  };
  return callback(null, response);
};


module.exports = { hello, bye };