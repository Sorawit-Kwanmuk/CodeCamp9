const person = {
  firstName: 'John',
  lastName: 'Doe',
  wife: undefined, //ใช้ undefined ไม่ได้
  getFullName() {
    //ใช้ function ไม่ได้
    return this.firstName + ' ' + this.lastName;
  },
};

const json = JSON.stringify(person);
console.log(json);
// {"firstName":"John","lastName":"Doe"}
const response = { firstName: 'John', lastName: 'Doe' };
const person2 = JSON.parse(json);
console.log(person2);
// {"firstName":"John","lastName":"Doe"}
// { firstName: 'John', lastName: 'Doe' }
