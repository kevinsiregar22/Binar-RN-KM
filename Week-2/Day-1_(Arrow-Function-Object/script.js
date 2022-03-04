//arrow function
//arrow function tidak mengenal this

// let cekBilangan = (bilangan) => {
//   return bilangan % 2 === 0 ? "genap" : "ganjil";
//   //     if (bilangan % 2 === 0 ? "genap" : "ganjil");
//   //   if (bilangan % 2 === 0) {
//   //     console.log("bilangan genap");
//   //   } else {
//   //     console.log(" bilangan ganjil");
//   //   }};
// };
// console.log(cekBilangan(6));

const myFunction = (kelipatanBerapa, BatasAhkir) => {
  let result = [];
  for (let i = kelipatanBerapa; i <= BatasAhkir; i = i + kelipatanBerapa) {
    result.push(i);
  }
  return result;
};

console.log(myFunction(2, 21));

const myHobby = ["reading", "singing", "running", "speaking", ["coding", "swimming", "tiga"], ["A'zham", "iran", ["kevin", ["siregar"]]]];

console.log(myHobby[5][2][1][0]);
