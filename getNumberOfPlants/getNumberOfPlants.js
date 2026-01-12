function getNumberOfPlants(fieldSize, unit, crop) {

  let pickedUnit;

  if (unit === "acre" || unit === "acres") {
    pickedUnit = 4046.86;
  } else if (unit === "hectare" || unit === "hectares") {
    pickedUnit = 10000;
  }

  const allCrop = {
    corn: 1,
    wheat: 0.1,
    soybeans: 0.5,
    tomatoes: 0.25,
    lettuce: 0.2
  };

  let pickedCrop = allCrop[crop];
  let totalFieldSize = fieldSize * pickedUnit;

  return Math.floor(totalFieldSize / pickedCrop);
}
