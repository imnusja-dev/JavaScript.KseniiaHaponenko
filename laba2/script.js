// Змінна для зберігання поточної активної таблиці
let currentType = 'students';

// Назви полів (placeholder) для кожної таблиці
const matrix = {
    students: ['ПІБ', 'Клас', 'Дата народження', 'Телефон', 'Адреса', 'Середній бал', 'Email'],
    teachers: ['ПІБ', 'Предмет', 'Стаж', 'Категорія', 'Ставка', 'Телефон', 'Email'],
    subjects: ['Назва', 'Кількість годин', 'Вчитель', 'Клас', 'Тип', 'Кабінет', 'Семестр']
};

// 1. Перемикання між таблицями
function showTable(tableName) {
    document.getElementById('students').style.display = 'none';
    document.getElementById('teachers').style.display = 'none';
    document.getElementById('subjects').style.display = 'none';

    document.getElementById(tableName).style.display = 'block';
    closeForm(); // Закрываем форму при смене вкладки
}

// 2. Відкриття форми з підказками (placeholders)
function openForm(type) {
    currentType = type;
    const formDiv = document.getElementById('form');
    const fields = matrix[type];

 // Динамічно підставляємо підказки в input та очищаємо минулі значення
    for (let i = 1; i <= 7; i++) {
        const input = document.getElementById(`input${i}`);
        input.placeholder = fields[i - 1];
        input.value = '';
    }

    formDiv.style.display = 'block';
}

// 3. Закриття форми
function closeForm() {
    document.getElementById('form').style.display = 'none';
}

// 4. Додавання нового рядка до активної таблиці
function addData() {
    const values = [];
    
 // Зчитуємо дані з усіх 7 полів
    for (let i = 1; i <= 7; i++) {
        const val = document.getElementById(`input${i}`).value.trim();
        
       // Проста валідація на заповненість
        if (!val) {
            alert('Будь ласка, заповніть усі поля!');
            return;
        }
        values.push(val);
    }

   // Знаходимо потрібну таблицю щодо id контекстного блоку
    const tableContainer = document.getElementById(currentType);
    const table = tableContainer.querySelector('table');

 // Створюємо новий рядок <tr> наприкінці таблиці
    const newRow = table.insertRow();

   // Заповнюємо комірки <td>
    values.forEach(text => {
        const newCell = newRow.insertCell();
        newCell.textContent = text;
    });

// Приховуємо форму після успішного додавання
    closeForm();
}