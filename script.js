var nr1 = Number(prompt('Introduce-ti primul numar'));
var nr2 = Number(prompt('Introduce-ti al doilea numar'));
var nr3 = Number(prompt('Introduce-ti al treilea numar'));
var alegeNumar = Number(prompt('Alege un numar de la 1 la 4'))

var myArray=[];
myArray.push(nr1,nr2,nr3);


switch(alegeNumar){
    case 1:
        result = nr1 + nr2 + nr3;
        console.log(result);
        break;
    case 2:
        var largest = Math.max.apply(Math, myArray);
        console.log(largest);
        break;
    case 3:
        result = nr1 + nr3;
        console.log(result);
        break;
    case 4:
        console.log(myArray);
}



