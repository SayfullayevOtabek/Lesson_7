function countDown(num) {
  const newNum = num - 1;

  console.log(newNum);
  if (newNum > 0) {
    countDown(newNum);
  }
}

// countDown(10);

// 5! = 1 * 2 * 3 * 4 * 5

const factorial = (n) => {
  if (n == 0) return 1;
  else return n * factorial(n - 1);
};

// console.log(factorial(3));

const person = {
  name: "Abduvoxid",
  age: 23,
  job: "Frontend developer",
  university: {
    name: "National University",
    degree: "bachelor",
  },
  sayHello1: function () {
    console.log(this.name);
    console.log("Salom " + this.name);
  },
  sayHello2: () => {
    console.log("salom 2");
  },
};

// console.log("person", person);

// console.log("university", person.university);

// console.log(person.name);

// console.log(person.isMarried?.something);

console.log(person.sayHello1());

// console.log(person.sayHello2());

const person2 = { ...person };

// console.log("person2", person2);



// Lesson_7_homework

// function customSort(arr) {
//   const numbers = [];
//   const booleans = [];
//   const others = [];

//   for (let item of arr) {
//       if (typeof item === 'number') {
//           numbers.push(item);
//       } else if (typeof item === 'boolean') {
//           booleans.push(item);
//       } else {
//           others.push(item);
//       }
//   }


//   numbers.sort((a, b) => a - b);
//   booleans.sort(); 

 
//   const sortedArray = [...numbers, ...booleans, ...others];

//   return sortedArray;
// }


// const input1 = [7, 10, 5, 3, 2];
// const input2 = [1, 2, 3, 10, -4, true];
// const input3 = [];
// console.log(customSort(input1)); 
// console.log(customSort(input2)); 
// console.log(customSort(input3));







// function maxSumOfTwoElements(arr) {
//   if (arr.length < 2) {
//       return 0;
//   }

//   arr.sort((a, b) => b - a); 

//   return arr[0] + arr[1]; 
// }

// function getInputAndCalculate() {
//   const inputString = prompt('Enter a list of numbers separated by commas:');
//   const inputArray = inputString.split(',').map(Number);

//   const output = maxSumOfTwoElements(inputArray);
//   alert(`Maximum sum of any two elements: ${output}`);
// }

// getInputAndCalculate();