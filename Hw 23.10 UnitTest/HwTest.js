var Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.company = 0;
    this.doJob = function () {
        return 'Doing job';
    };

};

var company = {
    name: "WizardDev",
    employees: [],
    addEmp: function(emp) {
        this.employees.push(emp);
        emp.company = this;
    }
};

var personVasya = new Person('Vasya', 28);


function newPersonCopy (person) {
    var personCopy = {};

    var reference = person.company;
    person.company = null;
    var obj = JSON.stringify(person);
    personCopy = JSON.parse(obj);
    personCopy.company = reference;
    personCopy.name = 'vasya2';
    company.addEmp(personCopy);

    return personCopy;
}

var newVasya = newPersonCopy(personVasya);

console.log(newVasya);


function newPersonCopy (obj) {
     var copyObj = {};
      for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
              if( typeof obj[prop] === "object") {
                  copyObj[prop] = (obj[prop]);
              } else {
                copyObj[prop] = obj[prop];
            }
          } 
      }
      return copyObj;
}