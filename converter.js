document.addEventListener("DOMContentLoaded", function(){

        document.getElementById("convertButton").addEventListener("click", function() {
            const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
            const unitSelect = document.getElementById("unitSelect").value;
            const resultArea = document.getElementById("resultArea");

            if (!isNaN(temperatureInput)) {
                let convertedTemperature;
                let convertedUnit;

                if (unitSelect === "celsius") {
                    convertedTemperature = (temperatureInput - 32) * 5/9;
                    convertedUnit = "Celsius";
                } else if (unitSelect === "fahrenheit") {
                    convertedTemperature = (temperatureInput * 9/5) + 32;
                    convertedUnit = "Fahrenheit";
                } else if (unitSelect === "kelvin") {
                    convertedTemperature = temperatureInput + 273.15;
                    convertedUnit = "Kelvin";
                }

                resultArea.innerHTML = `Converted Temperature: ${convertedTemperature} ${convertedUnit}`;
            } else {
                resultArea.innerHTML = "Please enter a valid temperature.";
            }
             
        });
    });
