//Task one

function sumEven (num) {
    let quantity = 0;
    let sum = 0;

    for(let i = 0; i <= num; i++) {
        if ( i % 2 == 0) {
            sum += i;
            quantity += 1;
        }
    }

    return "The sum of even numbers in the range from 1 to " + num + " is "  + sum + ", and their number is - "+ quantity +"!" ;
}

function getUserNumber () {
    var userNumInput = document.getElementById("num1").value;
    return userNumInput;
}


function printSumNum () {
    var inputNumber = getUserNumber ();
    document.getElementById("sumNum1").innerHTML = sumEven(inputNumber);
}

//Task two

function primeNumber (n) {
    if ( n < 2) 
    return "Enter a positive integer greater than one";

    for( var i = 2; i < n; i++) {
        if ( n % i == 0) 
        return "The number " +  n + " entered  is not a prime";
    }

    return "The number " + n +  " is prime";
}

function getUserNumber2 () {
    var userNumInput2 = document.getElementById("num2").value;
    return userNumInput2;
}

function printSumNum2 () {
    var inputNumber2 = getUserNumber2 ();
    document.getElementById("sumNum2").innerHTML = primeNumber(inputNumber2);
}

//Task three

function getFact (f) {
    var x = 1;
        while(f) {
            x *= f--;
        }
    return x;
}
function getUserNumber3 () {
    var userNumInput3 = document.getElementById("num3").value;
    return userNumInput3;
}

function printFact () {
    var inputNumber3 = getUserNumber3 ();
    document.getElementById("sumNum3").innerHTML = getFact(inputNumber3);
}

//Task four

function sumDigOfNum (digits) {

    var str = digits.toString();
    var sum = 0;
    var currentDig = 0;

    if ( digits > 0) {
        for ( var i = 0; i <= str.length; i ++) {
            currentDig = digits % 10;
            sum += currentDig;
            digits = Math.floor( digits /10 );
        }
    } else return 1;

    return sum;
}

function getUserDigits () {
    var userNumInput4 = document.getElementById("num4").value;
    return userNumInput4;
}

function printDigitsSum () {
    var inputNumber4 = getUserDigits ();
    document.getElementById("sumNum4").innerHTML = sumDigOfNum(inputNumber4);
}

//Task five

function reversNum (mirrorNum) {
    var sum = "";
    
        while(mirrorNum > 0) {
            sum += mirrorNum % 10;
            mirrorNum = parseInt(mirrorNum/10);
        }
        return Number(sum);
}

function getUserNum5 () {
    var userNumInput5 = document.getElementById("num5").value;
    return userNumInput5;
}

function printReverseNum () {
    var inputNumber5 = getUserNum5 ();
    document.getElementById("sumNum5").innerHTML = reversNum(inputNumber5);
}

//Task six

function evenSum (a, b) {
    var sum = 0;
    if (a % 2 == 0) {
     sum =   a * b;
    } else {
     sum =   a + b;
    }
	return sum;
}

function getUserNum6 () {
    var userNumInput6 = document.getElementById("num6").value;
    return userNumInput6;
}

function printEvenSum () {
    var inputNumber6 = getUserNum6 ();
    document.getElementById("sumNum6").innerHTML = evenSum(inputNumber6);
}
