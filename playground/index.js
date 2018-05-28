// Составить выражение типа 1*b*1c

const getString = (sep, ...args) => args.join(sep);

console.log(getString('*', '1', 'b', '1c',));

// Узнать какое число удалили из массива - сложность не более O(n^2)

const createArr = (num) => Array.from(new Array(num), (x, i) => i + 1);

const sum = (arr) => arr.reduce((acc, el) => acc + el , 0);

const arr_1 = createArr(100);
const arr_2 = createArr(100);

arr_2.splice(5, 1);

console.log(sum(arr_1) - sum(arr_2));


// Фиговина

// function Book(name, author) {
//     this.name = name;
//     this.author = author;
//     return this;
// }
//
// function Foo(className, name, author) {
//     return new className(name, author);
// }
//
// const book = Foo(Book, 'Учебник javascript', 'Петр Сергеев');
//
// console.log(book.name);

function Book(name, author) {
    this.name = name;
    this.author = author;
    return this;
}

function Foo(className, name, author) {
    return Object.create(className.call(className.prototype, name, author));
}

const book = Foo(Book, 'Учебник javascript', 'Петр Сергеев');

console.log(book.name, book instanceof Book);

// Привязка контекста

function f() { console.log(this.x); }
const obj = {x: 'bar'};
f.bind(obj)();
f.call(obj);
f.apply(obj);
obj.func = f;
obj.func();


// type of undefined

console.log(typeof (function(){})());

console.log(typeof typeof undefined);

// sum(1)(2)(5)(10) = 18

const s_u_m = a => b => c => d => a + b + c + d;

console.log(s_u_m(1)(2)(5)(10));

console.log('true + false', true + false); // 1

console.log('12 / "6"', 12 / "6"); // 2

console.log('"number" + 15 + 3', "number" + 15 + 3); //"number153"

console.log('15 + 3 + "number"', 15 + 3 + "number"); // '18number' // тут ошиблась

console.log('[1] > null', [1] > null); //true

console.log('"foo" + + "bar"', "foo" + + "bar"); // 'fooNaN'

console.log("'true' == true", 'true' == true); // false // тут ошиблась

console.log("false == 'false'", false == 'false'); // false

console.log("null == ''", null == ''); //false

console.log('!!"false" == !!"true"', !!"false" == !!"true"); // true

console.log("[‘x’] == ‘x’", ['x'] == 'x'); // true

console.log("[] + null + 1", [] + null + 1); // null1

console.log('0 || "0" && {}', 0 || "0" && {}); // {} // я хз

console.log('[1,2,3] == [1,2,3]', [1,2,3] == [1,2,3]); // false

console.log('{}+[]+{}+[1]', {}+[]+{}+[1]); // [object Object][object Object]1 // Не угадала

console.log('!+[]+[]+![]', !+[]+[]+![]); // truefalse // true понимаю - дальше не

console.log(new Date(0) - 0); // 0 / ?
console.log(new Date(0) + 0); // date0