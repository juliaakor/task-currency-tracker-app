export const validateEmail = (email: string) => {
  const emailPattern = /^\S+@\S+\.\S+$/;

  if (email.trim() === '') return 'Email is required';
  if (!emailPattern.test(email)) return 'Email is invalid';

  return '';
};
