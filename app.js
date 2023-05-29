let tries = 3

function randomNumber(){
    let max = 100
    let min = 1
    return Math.floor((Math.random() * (max - min + 1)) + min)
}

function validNumberQuantity(number){
    if(number >= 1 && number <= 100) return true
    return false
}

function promptFirstNumber() {
    let number = prompt("Ingrese un número. Tienes " + tries + " intentos");
    number = parseInt(number);
    if (isNaN(number)) {
      console.log("No es un número");
      return promptFirstNumber(); 
    }
    if (!validNumberQuantity(number)) {
      console.log("El número no está dentro de los parámetros definidos (1 y 100)");
      return promptFirstNumber();
    }
    return number;
  }
  

function victory(number){
    alert(`Acertaste! el numero era: ${number}`)
}

function defeat(number){
    alert(`Perdiste :c el numero era: ${number}`)
}

function promptNumberLessThanRandomNumber(remainingTries){
    let number = prompt(`El numero a encontrar es mayor. Ingrese nuevamente un numero. Le quedan ${remainingTries}`)
    number = parseInt(number)
    if(isNaN(number)) {
        console.log('No es un numero')
        return promptNumberLessThanRandomNumber(remainingTries);
    }
    if(!validNumberQuantity(number)) {
        console.log('El numero no está dentro de los parametro definidos (1 y 100)');
        return promptNumberLessThanRandomNumber(remainingTries);
    }
    return number;

}



function promptNumberGreaterThanRandomNumber(remainingTries){
    let number = prompt(`El numero a encontrar es menor. Ingrese nuevamente un numero. Le quedan ${remainingTries}`)
    number = parseInt(number)
    if(isNaN(number)) {
        console.log('No es un numero')
        return promptNumberGreaterThanRandomNumber(remainingTries);
    }
    if(!validNumberQuantity(number)) {
        console.log('El numero no está dentro de los parametro definidos (1 y 100)');
        return promptNumberGreaterThanRandomNumber(remainingTries);
    }
    return number;
}
function game(){
    const findNumber = randomNumber()
    let number = promptFirstNumber()
    console.log('findNumber: ', findNumber)
    console.log('number: ', number)
    for(let i = 1; (i <= tries || number === findNumber) ; i++){
        if(number === findNumber) break
        if(number < findNumber) number = promptNumberLessThanRandomNumber(tries - i) //15
        else number = promptNumberGreaterThanRandomNumber(tries - i)
    }
    if(findNumber === number) victory(findNumber)
    else defeat(findNumber)
}

game()