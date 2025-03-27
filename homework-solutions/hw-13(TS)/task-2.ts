// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true,
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string): boolean {
  let arr = [];
  arr = password.split('');
  let numbers = '1234567890';
  let toUpperCase = arr.find((elem) => /[A-Z]/.test(elem));
  let toLowerCase = arr.find((elem) => /[a-z]/.test(elem));
  let toNumber = arr.find((elem) => numbers.includes(elem));
  if (password.trim().length < 8) {
    return false;
  }
  if (!toUpperCase) {
    return false;
  }
  if (!toLowerCase) {
    return false;
  }
  if (!toNumber) {
    return false;
  }

  return true;
}
console.log(validatePassword('         aA1'));
console.log(validatePassword('                 '));
console.log(validatePassword('testQA12'));
console.log(validatePassword('password1'));
console.log(validatePassword('PASSWORD1'));
