function problem16(arrayOfCars, nameOfCarCompany) {
  let carsDefinition = [];
  for (car of arrayOfCars) {
    if (car.make === nameOfCarCompany) {
      let carDefinition = "";
      for ([key, value] of Object.entries(car)) {
        carDefinition += key + " : " + value + " , ";
      }
      carsDefinition.push(carDefinition);
    }
  }

  return carsDefinition;
}
problem16(
  [
    {
      make: "Toyota",
      model: "Corolla",
      year: 2022,
    },
    {
      make: "Honda",
      model: "Civic",
      year: 2023,
    },
    {
      make: "Ford",
      model: "Mustang",
      year: 2021,
    },
    {
      make: "Toyota",
      model: "Camry",
      year: 2023,
    },
    {
      make: "Chevrolet",
      model: "Silverado",
      year: 2022,
    },
    {
      make: "Toyota",
      model: "Rav4",
      year: 2023,
    },
  ],
  "Toyota"
);
