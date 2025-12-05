export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password && password.length >= 6;
};

export const validateLoginForm = (email, password) => {
  const errors = {};
  
  if (!email) {
    errors.email = 'Email é obrigatório';
  } else if (!validateEmail(email)) {
    errors.email = 'Email inválido';
  }
  
  if (!password) {
    errors.password = 'Senha é obrigatória';
  } else if (!validatePassword(password)) {
    errors.password = 'Senha deve ter no mínimo 6 caracteres';
  }
  
  return errors;
};
