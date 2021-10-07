// export const validatePassword = (password) => {
//   if (password.length > 7) {
//     return true;
//   }
//   return false;
// };

// ======== V Shorten Down V ===========

export const validatePassword = (password) => {
  const hasValidLength = password.length >= 8;
  const hasLowerCaseCharacter = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasUpperCaseCharacter = /[A-Z]/.test(password);

  return (
    hasValidLength &&
    hasLowerCaseCharacter &&
    hasNumber &&
    hasUpperCaseCharacter
  );
};
