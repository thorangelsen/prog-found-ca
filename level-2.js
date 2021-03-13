//question 1

for (var i = 15; i <= 25; i++) {
    if ((i % 2) == 0) {
        continue;
    }
    console.log(i);
}

//question 2

function innerFunction(inside) {
    console.log(inside)
}

innerFunction("I am a function");

function outerFunction(outside) {
    console.log(outside)
}
outerFunction(innerFunction);