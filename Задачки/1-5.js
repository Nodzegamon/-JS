/*
Задание #1. Подсчитать количество букв "a" в строке
*/
//var str = prompt("Введите строку");//выхываем окошко где что-то пишем и записываем в str 
var str="A long time ago, in a galaxy far, far away..."
var n=(str.split("a").length - 1);// превращаем строку в массив и ищем нужный символ
if (n==0) // если символа нет,пишем об этом
console.log("Такого символа нет");
else
console.log(n);// если есть, выводим кол-во

/*
Задание #2. Подсчитать количество букв "a" в строке
*/
var str="A long time ago, in a galaxy far, far away..."
var n=(str.replace(/a/g,"b"));// замена с использованием ключа /символ/g, чтобы заменил все символы, а не только первый
console.log(n);
/*
Задание #3. Рассчитать n-число Фиббоначи
*/
var n=77;
function fib(n) {
    var a = 1,
      b = 1;
    for (var i = 3; i <= n; i++) {
      var c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
console.log(fib(n));
/*
Задание #4. Найти количество пяторок в массиве
*/