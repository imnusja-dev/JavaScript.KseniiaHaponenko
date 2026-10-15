function showTable(id) {
   document.getElementById('students').style.display = 'none';
    document.getElementById('teachers').style.display = 'none';
   document.getElementById('subjects').style.display = 'none';

    document.getElementById(id).style.display = 'block';
}

//ТАБЛИЦЯ 1
// 1. Створюємо масив об'єктів "УЧНІ"
const students = [
    {
        fullName: "Іваненко Іван",
        grade: "10-А",
        birthDate: "15.03.2010",
        phone: "099-111-22-33",
        address: "Дніпро",
        gpa: 10.2,
        email: "ivan@gmail.com"
    },
    {
        fullName: "Петренко Анна",
        grade: "10-А",
        birthDate: "21.07.2010",
        phone: "097-222-33-44",
        address: "Дніпро",
        gpa: 11.1,
        email: "anna@gmail.com"
    },
    {
        fullName: "Сидоренко Олег",
        grade: "10-Б",
        birthDate: "05.11.2009",
        phone: "050-333-44-55",
        address: "Київ",
        gpa: 9.5,
        email: "oleg@gmail.com"
    },
    {
        fullName: "Коваль Марія",
        grade: "10-Б",
        birthDate: "12.01.2010",
        phone: "063-444-55-66",
        address: "Львів",
        gpa: 11.8,
        email: "maria@gmail.com"
    }
];

// 2. Функція для рендерингу (відображення) таблиці
//renderStudents -> відображення таблиці

function renderStudents(data) {
    // Знаходимо tbody в HTML по id
    const tbody = document.getElementById('students-list');

    // Перетворюємо кожен об'єкт учня в HTML-рядок <tr>...</tr>
    const rowsHtml = data.map(student => `
        <tr>
            <td>${student.fullName}</td>
            <td>${student.grade}</td>
            <td>${student.birthDate}</td>
            <td>${student.phone}</td>
            <td>${student.address}</td>
            <td>${student.gpa}</td>
            <td>${student.email}</td>
        </tr>
    `).join('');

    // Вставляємо згенеровані рядки у tbody
    tbody.innerHTML = rowsHtml;
}

// 3. Виклик функції рендеринга при завантажені скрипта
renderStudents(students);

//ТАБЛИЦЯ 2
// 1. Масив об'єктів "Вчителі"
const teachers = [
    {
        fullName: "Коваленко Олена",
        subject: "Математика",
        experience: "15 років",
        category: "Вища",
        rate: 1.0,
        phone: "099-333-44-55",
        email: "kovalenko@gmail.com"
    },
    {
        fullName: "Шевченко Петро",
        subject: "Інформатика",
        experience: "8 років",
        category: "Перша",
        rate: 1.0,
        phone: "097-444-55-66",
        email: "shevchenko@gmail.com"
    },
    {
        fullName: "Бондаренко Ірина",
        subject: "Фізика",
        experience: "12 років",
        category: "Вища",
        rate: 0.75,
        phone: "050-555-66-77",
        email: "bondarenko@gmail.com"
    },
    {
        fullName: "Ткаченко Сергій",
        subject: "Історія",
        experience: "5 років",
        category: "Друга",
        rate: 1.0,
        phone: "063-666-77-88",
        email: "tkachenko@gmail.com"
    }
];

// 2. Функция для рендерингу (відображення) таблиці
function renderTeachers(teachersData) {
    // Знаходимо tbody за його ID
    const tbody = document.getElementById('teachers-list');

    // Перетворюємо масив вчителів у HTML-рядки (<tr>...</tr>)
    const rowsHtml = teachersData.map(teacher => `
        <tr>
            <td>${teacher.fullName}</td>
            <td>${teacher.subject}</td>
            <td>${teacher.experience}</td>
            <td>${teacher.category}</td>
            <td>${teacher.rate}</td>
            <td>${teacher.phone}</td>
            <td>${teacher.email}</td>
        </tr>
    `).join('');

    // Вставляємо згенеровані рядки в таблицю
    tbody.innerHTML = rowsHtml;
}

// 3. Запускаємо рендеринг при завантаженні скрипта
renderTeachers(teachers);


//ТАБЛИЦЯ 3
// 1. Масив об'єктів "Предмет"
const subjects = [
    {
        title: "Математика",
        hours: 4,
        teacher: "Коваленко Олена",
        grade: "10-А",
        type: "Основний",
        room: 205,
        semester: 1
    },
    {
        title: "Інформатика",
        hours: 2,
        teacher: "Шевченко Петро",
        grade: "10-А",
        type: "Основний",
        room: 301,
        semester: 1
    },
    {
        title: "Фізика",
        hours: 3,
        teacher: "Бондаренко Ірина",
        grade: "10-Б",
        type: "Основний",
        room: 104,
        semester: 1
    },
    {
        title: "Історія",
        hours: 2,
        teacher: "Ткаченко Сергій",
        grade: "10-Б",
        type: "Основний",
        room: 210,
        semester: 1
    }
];

// 2. Функція для рендерингу (відображення) таблиці
function renderSubjects(subjectsData) {
    // Знаходимо tbody за його ID
    const tbody = document.getElementById('subjects-list');

    // Перетворюємо масив у HTML-рядки (<tr>...</tr>)
    const rowsHtml = subjectsData.map(subject => `
        <tr>
            <td>${subject.title}</td>
            <td>${subject.hours}</td>
            <td>${subject.teacher}</td>
            <td>${subject.grade}</td>
            <td>${subject.type}</td>
            <td>${subject.room}</td>
            <td>${subject.semester}</td>
        </tr>
    `).join('');

    // Вставляємо згенеровані рядки у таблицю
    tbody.innerHTML = rowsHtml;
}

// 3. Викликаємо рендеринг
renderSubjects(subjects);