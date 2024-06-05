export const randomizeArray = (array) => {
  let currentIndex = array.length;
  let randomIndex, tempValue;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Intercambia el elemento seleccionado con el último elemento sin procesar
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }

  return array;
}
