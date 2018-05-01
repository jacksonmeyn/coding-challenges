function fizzBuzz(divisor1, divisor2, maxNumber) {
    
    for (let i = 1; i < maxNumber; i++) {
        let message = "";
        if (i % divisor1 == 0) {
            message += "Fizz";
        } 
        if (i % divisor2 == 0) {
            message += "Buzz";
        }
        if (message == "") {
            console.log(i);
        } else {
            console.log(message);
        }

    }
}

fizzBuzz(3,5,50);