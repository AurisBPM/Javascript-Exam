/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */



function Calculator(a, b){
    this.a = a;
    this.b = b;
     }
    
    Calculator.prototype.sum = function(){
        return this.a + this.b;
    }
    Calculator.prototype.subtraction = function(a, b){
        return this.a - this.b;
    }
    Calculator.prototype.multiplication = function(a, b){
        return this.a * this.b;
    }
    Calculator.prototype.division = function(a, b){
        return this.a / this.b;
    }

const check = new Calculator(5, 2);

console.log(check.sum());
console.log(check.subtraction());
console.log(check.multiplication());
console.log(check.division());