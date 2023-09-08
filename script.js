function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    var bmi = weight / Math.pow(height / 100, 2);
    document.getElementById('result').innerText = "Your BMI is: " + bmi.toFixed(2);
}
