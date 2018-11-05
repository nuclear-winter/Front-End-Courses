function TaxMan () {
     var obj  = new Obj ();
     return obj;
} // Пример функции конструктора object

/////////////////////////////////////////////////////////////////////

var obj1 = {
    age: 33
};

function addAge(age) {
    this.age = age;
}
obj1.add = addAge;
// Метод добавления свойств конструкторов в object

/////////////////////////////////////////////////////////////////////

/* Пример функции конструктора объекта Person ( будущего сотрудника компании) */
var Person = function (name, age, doJob) {
    this.name = name;
    this.company = 0; // Место работы появиться, но немного позже. Для явности этого свойства мы его инициализируем с значением 0 ( не принципиально значение)
    this.age = age;
    this.doJob = function () { 
        return 'Doing Job'
    };
};

/* Пример функции конструктора объекта Company (будущее место работы нашего Person) */
var Company = function (name) { // Аргументом передаётся название компании
    this.name = name;
    this.employees = []; // Массив куда будут заноситься новые сотрудники
    this.addEmp = function (empl) { //Метод в который мы передаёт нашего Person 
        this.employees.push(empl); // И который пушится в массив сотрудников
        empl.company = this; // На этой строке, мы нашему новому Person заодно добавляем нашу компанию =)
    };
};

var vasya = new Person(); //Создаём нового сотрудника Василия
var company = new Company.addEmp(vasya); // Создаём компанию и зачисляем туда Василия (Создание компании, ее именование и зачисление туда сотрудника - порядок действий не обязательный, описанный в моём примере, я тестил в консоли)
//////////////////////////////////////////////


//////////////////////////////////////////////

/* Здесь аналогичный верхнему пример конструкторов с различием в том, что здесь я имею уже созданную компанию 
   и передаю её инициализированного по имени и возрасту Васю. Можно скопировать в консоль браузера  с 50 по 70 строки и 
   посмотреть результат */
var Empl = function (name, age, job) { 
    this.name = name;
    this.age = age;
    this.company = 0;
    this.doJob = function () {
        return 'Doing job';
    }

};

var company = { 
    name: "WizardDev",
    employees: [],
    addEmp: function(emp1) { 
        this.employees.push(emp1);
        emp1.company = this;
    }
};
var vasya = new Empl ('oleg', 28); 
company.addEmp(vasya);
company.employees[0];
///////////////////////////////////////////////

/* не завершенные скрижали - не обращай внимания */
function createPersonCopy (vasya) {
    var personCopy = {}


        var ref
        var obj = JSON.stringify(vasya);
        personCopy = JSON.prase(obj);

    

    return PersonCopy;
}

/////////////////////////////////////////////

var Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.company = 0;
    this.doJob = function () {
        return 'Doing job'
    }

};

var company = {
    name: "WizardDev",
    employees: [],
    addEmp: function(emp1) {
        this.employees.push(emp1);
        emp1.company = this;
    }
};
// Пример преобразования  объекта в JSON формат
var person = new Person ('oleg', 28);
company.addEmp(vasya);
undefined
var obj = JSON.stringify(person);
undefined
obj;
"{"name":"oleg","age":28,"company":0}"




