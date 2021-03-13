//question 1

var pet = "dog";

//question 2

var person = {
    age: 30,
    human: true,
};

//question 3

var outOfStock = false;

if (outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock")
}

//question 4

var numbers = [1, 3, 7, 11, 21];
console.log(numbers);

//question 5

for (var i = 15; i <= 20; i++) {
    console.log(i);
}

//question 6

for (var i = 15; i <= 20; i++) {
    if (i = 20);
    console.log(i)
}

//question 7

var transport = [
    {
        type: "boat",
        speed: 30,
        canFly: false,
    },
    {
        type: "plane",
        speed: 800,
        canFly: true,
    },
];
for (var i = 0; i < transport.length; i++) {

    var speed = transport[i].speed;
    var speedCanFly = transport[i].speed + " " + transport[i].canFly;

    console.log(speedCanFly);
}

//question 8

function whatIDontLike(weather) {
    console.log("I don't like " + weather);
}

whatIDontLike("rain");


//question 9

function sub(num1, num2) {
    var sum = num1 - num2;
    console.log(sum);
}

sub(4, 3);

//question 10

var loud = [];

function volume(sounds) {
    var volume = sounds + " " + loud;
    console.log(volume)
}
volume(11);