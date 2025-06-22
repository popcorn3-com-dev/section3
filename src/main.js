/**
 * const, let等の変数宣言
 */

// var 変数の上書き、変数を再宣言ができる。

// let val2 = 'let変数';
// console.log(val2);

// val2 = 'let変数を上書き';
// console.log(val2);

// letは再宣言不可能
// let val2 = '再宣言';
// console.log(val2);

// const val3='const';
// console.log(val3);

// const val3='uwagaki'

//constで定義したオブジェクトはプロばてぃの変更が可能
// const val4 = {
//   name: 'hiro',
//   age: 55,
// };
// val4.age = 20;
// val4.addless = 'saitama';
// console.log(val4);

//constで定義した配列はプロばてぃの変更が可能
const val5 = ['dog', 'cat'];
console.log(val5);
val5.forEach((e) => console.log(e));

const animal = [
  { name: 'dog', age: 24 },
  { name: 'cat', age: 30 },
  { name: 'dog', age: 10 },
];
animal.push({ name: 'bird', age: 4 });
// animal.forEach((e) => console.log(`${e.name}は${e.age}才です`));
// console.log(animal);

// const age70 = animal.filter((e) => e.age <= 24 && e.name === 'bird');
// console.log(age70);

const serchAnimal = (val, age, name) => {
  return val.filter((e) => e.age <= age || e.name === name);
};
const results = serchAnimal(animal, 10, 'dog');
console.log(results);

results.forEach((e) => console.log(`${e.name}は${e.age}才です`));
