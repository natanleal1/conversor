const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        let tempF = temp * 9 / 5 + 32;
        tempF = tempF.toFixed(2);
        result.textContent = `The result of ${temp} in Celsius is approximately ${tempF}°F`
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        let tempC = (temp - 32) * 5 / 9;
        tempC = tempC.toFixed(2);
        result.textContent = `The result of ${temp} in Fahrenheit is approximately ${tempC}°C`
    }
    else{
        result.textContent = 'Select a unit';
    }
}