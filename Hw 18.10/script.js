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

/* Замыкание — область видимости функции, которая сохраняется благодаря ссылке на эту функцию.. */
   function grandParent(g1, g2) {
    var g3 = 3;
    return function parent(p1, p2) {
        var p3 = 33;
        return function child(c1, c2) {
            var c3 = 333;
            return g1 + g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3;
        };
    };
}

 /*child имеет доступ к своим локальным переменным, к переменным parent и к переменным grandParent. */
 /*parent имеет доступ к своим переменным и к переменным grandParent. */
 /*grandParent имеет доступ только к своим переменным. */

 var parentFunc = grandParent(1, 2); // возвращает parent()
 var childFunc = parentFunc(11, 22); // возвращает child()
 console.log(childFunc(111, 222)); // печатает 738
 // 1 + 2 + 3 + 11 + 22 + 33 + 111 + 222 + 333 == 738

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

    /*Каррирование - это функция принимающая один аргумент за раз
      Пример: */

      function add (x) {
          return function (y) {
              return x + y;
          };
      }

      /* or  */

      var add = x => y => x + y;

      var compose = (f, g) => x => f(g(x));
      var mult5AfterAdd10 = compose(mult5, add(10));

      /*Функция компоновки (compose) получает на вход два параметра: f и g. 
      После чего она возвращает функцию, принимающую один параметр, x,
       с вызовом которой композиция функций f после g осуществится с аргументом x. */