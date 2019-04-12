'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: process.env.CI_NAME,
      input: event,
    }),
  };
  console.log(JSON.stringify(response));
  callback(null, response);
};
