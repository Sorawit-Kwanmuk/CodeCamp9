// try {
//   const name = 'John';
//   // name = 'Jim';
//   console.log(firstName);
//   console.log('try ' + name);
// } catch (err) {
//   console.log('catch1 ' + err);
//   console.log('catch2 ' + err.name);
//   console.log('catch3 ' + err.message);
// }

// try {
//   const input = { payee: '', amount: -100, category: '', description: '', date: '27/1/90' };
//   // const input = { firstName: 'John', lastName: 'Smith', age: 'Ten', birthDate: '28/1/90' };
//   if (isNaN(input.amount)) {
//     throw new Error('Amount is not a number');
//   }
//   if (+input.amount < 0) {
//     throw new TypeError('Amount is negative');
//   }
// } catch (err) {
//   console.log(err);
//   console.log(err.name);
//   console.log(err.message);
// }

// Lab 1.1

// try {
//const user = { username: 'john', password: '1234', birthDate: '18/71/2000' };
//const user = { username: 'john', password: '123456', birthDate: '18/71/2000' };
//   const user = { username: 'john', password: '123456', birthDate: '1970-01-02' };
//   if (user.password.length < 6) {
//     throw new Error('Password is too short!');
//   }
//   if (new Date(user.birthDate).getTime === Number && isNaN(new Date(user.birthDate).getTime)) {
//     console.log(user.birthDate);
//   } else {
//     throw new Error('Birthdate is invalid!');
//   }
// } catch (err) {
//   console.log(err);
//   console.log(err.name);
//   console.log(err.message);
// }

// Lab 1.1 เฉลย
// try {
//   // const user = { username: 'john', password: '1234', birthDate: '18/71/2000' };
//   // const user = { username: 'john', password: '123456', birthDate: '18/71/2000' };
//   const user = { username: 'john', password: '123456', birthDate: '1970-01-02' };
//   const err = {};
//   if (user.password.length < 6) {
//     throw new Error('Password is too short!');
//   }
//   if (isNaN(new Date(user.birthDate).getTime)) {
//     throw new Error('Birthdate is invalid!');
//   }
//   if (Object.keys(err).length > 0) {
//     throw new Error(JSON.stringify(err));
//   }
// } catch (error) {
//   console.log(error.message);
// }
