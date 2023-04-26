const form = document.querySelector('form');
const output = document.querySelector('#output');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let degree = parseFloat(form.elements.degree.value);
  let type = form.elements.type.value.toLowerCase();
  
  if (type === "celsius") {
    let convertedDegree = (degree * 9/5) + 32;
    output.textContent = degree + "°C is equal to " + convertedDegree.toFixed(2) + "°F";
  } else if (type === "fahrenheit") {
    let convertedDegree = (degree - 32) * 5/9;
    output.textContent = degree + "°F is equal to " + convertedDegree.toFixed(2) + "°C";
  } else {
    output.textContent = "Invalid input. Please enter Celsius or Fahrenheit as the type of temperature.Please check the temperature once. ";
  }
});
