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

//-------------------------------------------------
//constで定義したオブジェクトはプロばてぃの変更が可能
//-------------------------------------------------

// const val4 = {
//   name: 'hiro',
//   age: 55,
// };
// val4.age = 20;
// val4.addless = 'saitama';
// console.log(val4);

//-------------------------------------------------
//constで定義した配列はプロばてぃの変更が可能
//-------------------------------------------------

// const val5 = ['dog', 'cat'];
// console.log(val5);
// val5.forEach((e) => console.log(e));

// const animal = [
//   { name: 'dog', age: 24 },
//   { name: 'cat', age: 30 },
//   { name: 'dog', age: 10 },
// ];
// animal.push({ name: 'bird', age: 4 });
// // animal.forEach((e) => console.log(`${e.name}は${e.age}才です`));
// // console.log(animal);

// // const age70 = animal.filter((e) => e.age <= 24 && e.name === 'bird');
// // console.log(age70);

// const serchAnimal = (val, age, name) => {
//   return val.filter((e) => e.age <= age || e.name === name);
// };
// const results = serchAnimal(animal, 10, 'dog');
// console.log(results);

// results.forEach((e) => console.log(`${e.name}は${e.age}才です`));

// const myProfile = {
//   usrname:'tanaka',
//   age:32
// };

// const message1=`名前は${myProfile.usrname}です。年齢は${myProfile.age}です。`;
// console.log(message1);

//-------------------------------------------------
// 分割代入
//-------------------------------------------------
// const {usrname,age} = myProfile;
// const message2=`名前は${usrname}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile=['yoshida','33'];
// const [usrname, age] = myProfile;

// const message2=`名前は${usrname}です。年齢は${age}です。`;
// console.log(message2);

//-------------------------------------------------
// デフォルト値(引数、分割代入)
//-------------------------------------------------
// const sayHallo = (myname = 'gest') => console.log(`こんにちは${myname}さん！`);
// sayHallo('satou');
// sayHallo();

// const myProfile = {
//   age:32,
// };
// const {age, usrname='gest'} = myProfile;
// console.log(age);
// console.log(usrname);

//-------------------------------------------------
// オプジェクトの省略記法
//-------------------------------------------------
// const myname = 'tanaka';
// const age = 45;

// const myProfile={ myname, age};
// console.log(myProfile);

//-------------------------------------------------
// スプレッド構文 ...
//-------------------------------------------------
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);
