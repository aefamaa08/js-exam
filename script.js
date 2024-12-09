
var num1 = parseFloat(prompt("Введите первое число:"));
var operator = prompt("Введите оператор 1)+, 2)-, 3)*, 4)/");
var num2 = parseFloat(prompt("Введите второе число:"));

// Проверяем, что данные введены корректно
if (isNaN(num1) || isNaN(num2)) {
    alert("Пожалуйста, введите правильные числа.");
} else if (!['1', '2', '3', '4'].includes(operator)) {
    alert("Пожалуйста, выберите правильный оператор (1, 2, 3 или 4).");
} else {
    // Создаем элементы и стилизуем их после получения данных

    // Создаем контейнер
    var container = document.createElement('div');
    container.style.backgroundColor = "#fff";
    container.style.borderRadius = "10px";
    container.style.padding = "30px";
    container.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    container.style.textAlign = "center";
    container.style.width = "300px";
    document.body.appendChild(container);

    // Создаем заголовок
    var title = document.createElement('h1');
    title.innerText = "Калькулятор";
    title.style.marginBottom = "20px";
    title.style.fontSize = "24px";
    title.style.color = "#007bff";
    container.appendChild(title);

    // Создаем блок ввода чисел и оператора
    var inputContainer = document.createElement('div');
    inputContainer.style.marginBottom = "20px";
    container.appendChild(inputContainer);

    // Ввод для первого числа
    var num1Input = document.createElement('input');
    num1Input.value = num1;
    num1Input.disabled = true; // Число только для отображения
    num1Input.style.width = "100%";
    num1Input.style.padding = "10px";
    num1Input.style.marginBottom = "10px";
    num1Input.style.border = "2px solid #ddd";
    num1Input.style.borderRadius = "5px";
    num1Input.style.fontSize = "16px";
    inputContainer.appendChild(num1Input);

    // Выпадающий список для оператора
    var operatorSelect = document.createElement('select');
    operatorSelect.disabled = true; // Оператор только для отображения
    operatorSelect.innerHTML = `
        <option value="1" ${operator == '1' ? 'selected' : ''}>+</option>
        <option value="2" ${operator == '2' ? 'selected' : ''}>-</option>
        <option value="3" ${operator == '3' ? 'selected' : ''}>*</option>
        <option value="4" ${operator == '4' ? 'selected' : ''}>/</option>
    `;
    operatorSelect.style.width = "100%";
    operatorSelect.style.padding = "10px";
    operatorSelect.style.marginBottom = "10px";
    operatorSelect.style.border = "2px solid #ddd";
    operatorSelect.style.borderRadius = "5px";
    operatorSelect.style.fontSize = "16px";
    inputContainer.appendChild(operatorSelect);

    // Ввод для второго числа
    var num2Input = document.createElement('input');
    num2Input.value = num2;
    num2Input.disabled = true; // Число только для отображения
    num2Input.style.width = "100%";
    num2Input.style.padding = "10px";
    num2Input.style.marginBottom = "10px";
    num2Input.style.border = "2px solid #ddd";
    num2Input.style.borderRadius = "5px";
    num2Input.style.fontSize = "16px";
    inputContainer.appendChild(num2Input);

    // Создаем кнопку для вычисления
    var button = document.createElement('button');
    button.innerText = "Вычислить";
    button.style.width = "100%";
    button.style.padding = "12px";
    button.style.backgroundColor = "#007bff";
    button.style.color = "white";
    button.style.fontSize = "18px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s";
    container.appendChild(button);

    // Элемент для отображения результата
    var resultText = document.createElement('h3');
    resultText.innerText = "Результат: ";
    var result = document.createElement('span');
    resultText.appendChild(result);
    result.style.fontWeight = "bold";
    result.style.color = "#007bff";
    container.appendChild(resultText);

    // Обработчик кнопки "Вычислить"
    button.addEventListener('click', function() {
        var resultValue;

        // Выполнение выбранной операции
        if (operator === '1') {
            resultValue = num1 + num2;
        } else if (operator === '2') {
            resultValue = num1 - num2;
        } else if (operator === '3') {
            resultValue = num1 * num2;
        } else if (operator === '4') {
            if (num2 === 0) {
                alert("На ноль делить нельзя.");
                return;
            }
            resultValue = num1 / num2;
        }

        // Отображаем результат
        result.innerText = resultValue;
    });
}

