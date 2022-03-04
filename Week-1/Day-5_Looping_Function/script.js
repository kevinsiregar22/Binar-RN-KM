console.log("for");

for (let index = 0; index < 10; index += 1) {
  console.log(`looping for ke ${index}`);
}

console.log("=========================while=========================");

let index = 1;

while (index < 8) {
  console.log(`looping while ke ${index}`);
  index += 1;
}

console.log("======================do while=======================");

let nilaiAwal = 1;
do {
  //console.log(`looping do while ke ${index}`);
  console.log("do while");
  nilaiAwal++;
} while (nilaiAwal < 8);

console.log("=========================function=========================");
//function
function aku(name, myAge) {
  console.log(`nama saya ${name} umur saya ${myAge}`);
}
aku("kevin", 21);

function jumlah(x, y, z) {
  let hasil = x + y + z;
  console.log(`hasil nya adalah ${hasil}`);
}
jumlah(1, 2, 3);

let nilaiAhkir = 100;

if (nilaiAhkir >= 100) {
  console.log("A");
} else if (nilaiAhkir > 70 && nilaiAhkir <= 98) {
  console.log("b");
} else {
  console.log("nilai tidak ada");
}
