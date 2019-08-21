const handleValidation = (state, fields) => {
  const validate = {};
  fields.map(field => {
    if (state[field] === '') {
      validate[field] = {
        error: true,
        message: `Field can't be empty!!`,
      };
    } else if (state['username'].length < 6) {
      validate['username'] = {
        error: true,
        message: `The field must be at least 6 characters long!!`,
      };
    } else if (field === 'confirmPassword') {
      if (state.confirmPassword !== state.password) {
        validate[field] = {
          error: true,
          message: `Password does not match!!`,
        };
      }
    } else {
      delete validate[field];
    }
    return validate;
  });

  return validate;
};

export default handleValidation;
