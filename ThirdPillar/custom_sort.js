let b = [1, 2, 3, 4, 15, 6, 7, 8, 9, 10];

b.sort(function (a, b) {
    //if a-b will be neg then  cmp func gives negative then a is placed before b (a < b)
    return a - b;
});