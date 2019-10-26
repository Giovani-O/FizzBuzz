/* Author: Giovani O.
 * This little program will print Fizz for numbers divisible by 3,
 * Buzz, for numbers divided by 5, and FizzBuzz for numbers divisible by both.
 */

let fizzBuzz = () => {
    for (i = 1; i <= 100; i++){

        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }else if (i % 3 == 0){
            console.log("Fizz");
        }else if (i % 5 == 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }

    }
}

fizzBuzz();
