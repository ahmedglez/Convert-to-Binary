
var array = [5, 2, 4, 8, 6, 3, 2, 5, 6];
var miarray2 = array.map((value) => {
  if (value % 2 === 0) {
    return value;
  } else {
    return "Impar";
  }
});

console.log(miarray2);