// assets/calculator/bmi-scripts.js
document.getElementById('calculate').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!weight || !height) {
        alert('Please enter valid weight and height values.');
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    document.getElementById('result').textContent = bmi;
});
