let canutillos = prompt("Cuantos canutillos queres comprar?");
let mostacillos = prompt("Cuantos mostacillos queres comprar?");

let cantidadCanutillos = parseInt(canutillos);
let cantidadMostacillos = parseInt(mostacillos);

let cantidadVentas = cantidadCanutillos + cantidadMostacillos;

let confimarVenta = () => {
  return new Promise((resolve, reject) => {
    if (cantidadVentas <= 5) {
      resolve(document.write("La cantidad de productos no puede ser menor a 5"));
    } else if (cantidadVentas >= 5 && cantidadVentas <= 15) {
      resolve(document.write("El costo del envio es de $200"));
    } else if (cantidadVentas >= 5 && cantidadVentas >= 15) {
      resolve(document.write("El costo del envio es gratis"));
    }
  });
};

confimarVenta(cantidadVentas)
  .then((callBack) => {
  })
  .catch((err) => console.warn(err));
