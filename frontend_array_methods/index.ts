const nums: number[] = [1, 4, 6, 7, 4, 9, 0, 11];
//return a new array with sum of all elements (reducer function)

for (let i: number = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
nums.forEach((num, idx, arr) => {
  console.log("elemento: " + num);
  console.log("índice: " + idx);
  console.log("nuestro arr: " + arr);
});

for (const num of nums) {
  console.log(num);
}
for (const idx in nums) {
  console.log(idx);
}

const result: number[] = [];
for (let i = 0; i < nums.length; i++) {
  result.push(nums[i] * 2);
}
console.log(result);

const squared: number[] = nums.map(num => num * num);
console.log(squared);

const numsCopy = [...nums];
numsCopy.push(100);
console.log(numsCopy);
console.log(nums);

const evenNumbers: number[] = nums.filter(num => num % 2 !== 0);
console.log(evenNumbers);

const totalFromNums = nums.reduce(
  (accum: number, curr: number) => accum + curr,
  10
);
console.log(totalFromNums);

console.log(nums.indexOf(167)); //returns -1
console.log(nums.indexOf(4)); //returns 1 (first occurrence)
console.log(nums.lastIndexOf(4)); //returns 4 (last occurrence)
console.log(nums.find(num => num === 49));
console.log(nums.findIndex(num => num === 4));
console.log(nums.includes(102)); //false
console.log(nums.includes(9)); //true
console.log(nums);
console.log(nums.sort((a, b) => a - b).reverse()); //mutates original array

let pets: string[] = ["Carlitox", "Peter", "Leona", "Nairobi"];
pets.splice(2, 0, "Lope De Vega", "Vega De Lope", "Diego De La Vega");
console.log(pets);
console.log(pets.some(pet => pet === "Carlitox"));
const sadFaces: string[] = ["😢", "😢", "😂", "😢"];
console.log(sadFaces.every(face => face === "😢")); //false
console.log(nums.join(", "));

//shallow copy -> different tags -> same memory address (remember, only in objects)
const petsCopy: string[] = pets.slice(2, 5);
