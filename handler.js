'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: process.env.CI_NAME,
      input: event,
    }),
  };

  callback(null, response);
};
