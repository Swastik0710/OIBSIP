function convertTemp() {
    const celsiusEl = document.getElementById("Celsius");
    const fahrenheitEl = document.getElementById("Fahrenheit");
    const kelvinEl = document.getElementById("Kelvin");

    const celsiusValue = parseFloat(celsiusEl.value);
    const fahrenheitValue = parseFloat(fahrenheitEl.value);
    const kelvinValue = parseFloat(kelvinEl.value);

    if (!isNaN(celsiusValue)) {
        // Converts from Celsius to Fahrenheit and Kelvin
        fahrenheitEl.value = (celsiusValue * 9 / 5) + 32;
        kelvinEl.value = celsiusValue + 273.15;
    } else if (!isNaN(fahrenheitValue)) {
        // Converts from Fahrenheit to Celsius and Kelvin
        celsiusEl.value = (fahrenheitValue - 32) * 5 / 9;
        kelvinEl.value = (fahrenheitValue - 32) * 5 / 9 + 273.15;
    } else if (!isNaN(kelvinValue)) {
        // Converts from Kelvin to Celsius and Fahrenheit
        celsiusEl.value = kelvinValue - 273.15;
        fahrenheitEl.value = (kelvinValue - 273.15) * 9 / 5 + 32;
    } else {
        // Handles invalid input or no input
        alert("Please enter a valid temperature value.");
    }
}
