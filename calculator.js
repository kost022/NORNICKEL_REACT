function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    var result = eval(displayValue);
    document.getElementById('display').value = result;

    // Добавляем результат в историю
    var historyDiv = document.getElementById('history');
    var historyItem = document.createElement('div');
    historyItem.textContent = displayValue + ' = ' + result;
    historyDiv.appendChild(historyItem);
}