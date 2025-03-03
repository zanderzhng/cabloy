module.exports = app => {
  const schemas = {};
  schemas.passwordForgot = {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        ebType: 'text',
        ebTitle: 'Email',
        notEmpty: true,
        format: 'email',
        'x-passwordForgotEmail': true,
      },
    },
  };
  return schemas;
};
