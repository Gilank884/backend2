// src/utils/index.js
exports.successResponse = (res, data, message = 'Success') => {
  res.json({ status: 'success', message, data });
};

exports.errorResponse = (res, error, code = 500) => {
  res.status(code).json({ status: 'error', message: error.message });
};
