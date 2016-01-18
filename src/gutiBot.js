"use strict";

function _ok(response) {
  return response.status(200);
}

function respondOk(response) {
  return _ok(response).end();
}

function respondWith(response, message) {
  return _ok(response).json({
    text: message,
  });
}

module.exports = {
  respondOk,
  respondWith,
};
