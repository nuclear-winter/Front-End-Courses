/* ООП в функциональном стиле: */////////

function coffeeMachine (power, capacity) {
    this.waterAmount = 0;
    // физическая константа - удельная теплоёмкость воды для getBoilTime
    var WATER_HEAT_CAPACITY = 4200;
    var timerId;
    var self = this;

    function getBoilTime () {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }


    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if ( amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function () { 
        return waterAmount;
    };

    function onReady() {
        alert('Кофе готов!');
    }

    this.run = function () {
       timerId = setTimeout(onReady, getBoilTime());
        
    };

    this.stop = function () {
        clearTimeout(timerId);
    };


}

var coffeeMachine = new coffeeMachine (1000, 500); // созд. new кофеварку
coffeeMachine.setWaterAmount = 450; // долить воды

 

/*ООП в прототипном стиле: *////////////
//ССылка __proto__ ищет сначало свойство у заданного объекта и не находя считывает его у 
//указанного объекта, который становиться прототипом
var anima = { eats: true };
var rabbit = { jump: true };
rabbit._proto_ = animal; // rabbit ссылается на аnimal для поиска свойства которые не находит у себя.

// Проверка на подлинность ( принадлежность) свойства object

rabbit.hasOwnProperty('eats'); // вернет 

// Создание object без prototype

var rabbit = Object.create(null);

// Создание object на prototype
// var.1 

var animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
    this._proto_ = animal;
  } // не работает IE 10

  // var.2 с свойством prototype

  var animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal;

  var rabbit = new Rabbit('Кроль');
  alert(Rabbit.eats);

