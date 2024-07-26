
/* Shallow Copy Examples */

// Using Object.assign()
// explaination: Object.assign() method is used to copy the values of all enumerable 
// own properties from one or more source objects to a target object. 
// It will return the target object.
const originalObject1 = { a: 1, b: { c: 2 } };
const shallowCopy1 = Object.assign({}, originalObject1);
shallowCopy1.b.c = 3;
console.log('Shallow Copy with Object.assign:');
console.log(originalObject1.b.c); // Output: 3

// Using Spread Operator
// explanation: The spread operator (...) is used to create a shallow copy of an object or array.
const originalObject2 = { a: 1, b: { c: 2 } };
const shallowCopy2 = { ...originalObject2 };
shallowCopy2.b.c = 3;
console.log('Shallow Copy with Spread Operator:');
console.log(originalObject2.b.c); // Output: 3

// Using Array.slice()
// explanation: The slice() method is used to create a shallow copy of an array.
const originalArray1 = [1, 2, { a: 3 }];
const shallowCopyArray1 = originalArray1.slice();
shallowCopyArray1[2].a = 4;
console.log('Shallow Copy with Array.slice:');
console.log(originalArray1[2].a); // Output: 4

/* Deep Copy Examples */

// Using JSON.stringify and JSON.parse
// explaination: JSON.stringify() is used to serialize an object into a JSON string
const originalObject3 = { a: 1, b: { c: 2 } };
const deepCopy1 = JSON.parse(JSON.stringify(originalObject3));
deepCopy1.b.c = 3;
console.log('Deep Copy with JSON.stringify and JSON.parse:');
console.log(originalObject3.b.c); // Output: 2

// Recursive Deep Copy Function
// explaination: This function recursively copies all properties of an object, 
// including nested objects.
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }

  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }

  return copy;
}

/* ----------------------------- */

const originalObject4 = { a: 1, b: { c: 2 } };
const deepCopy2 = deepClone(originalObject4);
deepCopy2.b.c = 3;
console.log('Deep Copy with Recursive Function:');
console.log(originalObject4.b.c); // Output: 2

// Using Higher-Order Functions

// Shallow Copy with map
const originalArray2 = [{ a: 1 }, { b: 2 }];
const shallowCopyArray2 = originalArray2.map(item => ({ ...item }));
shallowCopyArray2[0].a = 10;
console.log('Shallow Copy with map:');
console.log(originalArray2[0].a); // Output: 1

// Deep Copy with map and Recursive Function
const originalArray3 = [{ a: 1, b: { c: 2 } }, { d: 3 }];
const deepCopyArray1 = originalArray3.map(item => deepClone(item));
deepCopyArray1[0].b.c = 10;
console.log('Deep Copy with map and Recursive Function:');
console.log(originalArray3[0].b.c); // Output: 2

// Asynchronous Callback Example
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: 'John Doe' };
    callback(data);
  }, 1000);
}

function displayData(data) {
  console.log('Data received:', data);
}

fetchData(displayData);

// Nested Callbacks (Callback Hell) Example
function first(callback) {
  setTimeout(() => {
    console.log('First task done');
    callback();
  }, 1000);
}

function second(callback) {
  setTimeout(() => {
    console.log('Second task done');
    callback();
  }, 1000);
}

function third(callback) {
  setTimeout(() => {
    console.log('Third task done');
    callback();
  }, 1000);
}

first(() => {
  second(() => {
    third(() => {
      console.log('All tasks done');
    });
  });
});
