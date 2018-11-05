/* Функциональное программирование - подразумевает обёртывание всего кода в functionъ
   Пишется много маленьких многократно используемых функций, вызываемых одна за другой, что-бы
   получить результат
   Пример: */
   function func1 (par1) {
       return function (par2) {
           return par1 + par2 ;
       };
   }

var func2 = func1 (5);

func2(5);

 /* ФВП - Функции высшего порядка которые либо принимают в качестве аргументов функции  либо их возвращают
    Пример:  */  

    function prop (name) {
        return function (object) {
            return object[name];
        };
    }

    var allName = "We have " + tweeps.map(prop ("name")).join(", ");

/* Более гибкая функция
   Пример: */

   var arrayName = ['ola', 'katya', 'sdsd', 'sdsd', 'ssss', 'sds', 'sds', 'sds', 'sdsd', 'ssssssssssss'];

   function add (a, b) {
       return a + b;
   }

   var allArrayNameLength = arrayName.map(function (name) {
        return name.length;
   }).reduce(add, 0); 

   /* Или... */

   var allArrayNameLength = arrayName.map(prop("length")).reduce(add, 0);

/* Замыкания  - вложенные функции, замыкающие на себя переменные и аргументы, функции в которой они определены.
   Позволяют возвращаемой функции запоминать параметры, переданные функции создающей. */
   var fn = (function() {
    var numberOfCalls = 0;
    return function() {
       return ++ numberOfCalls;
    };
    })();

    var MyModule = {
        name: 'Oleg',
        sayPreved: function(name) {
            alert('PREVED ' + name.toUpperCase());
        },
        sayPrevedToOleg: function() {
            this.sayPreved(this.name);
        }
    };

    MyModule.sayPrevedToOleg();