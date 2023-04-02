var sum_to_n_a = function(n) {
    // your code here
    var number = parseInt(prompt('Enter value to sum to: '));
    var sum = 0;
    let text = "";

    for (let i = 0; i <= number; i++){
        sum += i;
    }

    text = "The sum to " + number + " is " + sum;
};

var sum_to_n_b = function(n) {
    // your code here
    var number = parseInt(prompt('Enter value to sum to: '));
    var sum = 0;
    let text = "";
    let i = 0;

    while (i <= number){
        sum += i;
        i++;
    }

    text = "The sum to " + number + " is " + sum;
};

var sum_to_n_c = function(n) {
    // your code here
    var number = parseInt(prompt('Enter value to sum to: '));
    var sum = 0;
    let text = "";
    let i = 0;

    do {
        sum += i;
    } while (i<=number);


    text = "The sum to " + number + " is " + sum;
};