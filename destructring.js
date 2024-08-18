// const obj1 = { 'key1': 1, "key2": 2, "key3": 1000 };

// const { key1, key3 } = obj1;

// console.log(key1, key3);


// second example

const arr1 = ['value1', 'value2'];

const [value1, value2] = arr1;

console.log(value1);
console.log(value2);


// third

const obj1 = { 'key1': 1, "key2": 2, "key3": 1000 };

let { key1, key3 } = obj1;

key1 = 20;
key3 = 123;

console.log(obj1.key1, obj1.key3);








