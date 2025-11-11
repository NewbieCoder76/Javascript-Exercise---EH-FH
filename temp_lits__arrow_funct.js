// TODO: Create a multiline string using template literals
const multilineString = `Just waking up in the morning gotta thank God .
I don't but today seems kinda odd`;
console.log(multilineString);
// TODO: Create a function that uses template literals for HTML generation
const makeUserCard = (user) => {
  return `
    <div>
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Age: ${user.age}</p>
    </div>
  `;
};
const user = { name: "Will", email: "w.mxabanisi2003@gmail.com", age: 22 };
console.log(makeUserCard(user));
// TODO: Convert regular functions to arrow functions
const add = (a, b) => {
  return a + b;
};
console.log(add(4, 5));
// TODO: Use arrow functions with array methods
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
const evenNums = nums.filter(n => n % 2 === 0);
const total = nums.reduce((acc, n) => acc + n, 0);
console.log("Doubled:", doubled);
console.log("Evens:", evenNums);
console.log("Total:", total);   







