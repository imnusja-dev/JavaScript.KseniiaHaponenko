function showTable(id) {
    document.getElementById('students').style.display = 'none';
    document.getElementById('teachers').style.display = 'none';
    document.getElementById('subjects').style.display = 'none';

    document.getElementById(id).style.display = 'block';
}

// 1. МАСИВИ ДАНИХ (використовуємо let замість const)
let students = [
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

let teachers = [
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

let subjects = [
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

// 2. ФУНКЦІЯ СТВОРЕННЯ/ПОКАЗУ ПОПАП-ВІКНА
function showErrorPopup(message) {
    let popup = document.getElementById('error-popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'error-popup';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.backgroundColor = '#ffffff';
        popup.style.padding = '20px';
        popup.style.border = '2px solid #e74c3c';
        popup.style.borderRadius = '8px';
        popup.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        popup.style.zIndex = '1000';
        popup.style.textAlign = 'center';
        document.body.appendChild(popup);
    }
    popup.innerHTML = `
        <p style="color: #c0392b; font-weight: bold; margin-bottom: 15px;">${message}</p>
        <button onclick="document.getElementById('error-popup').style.display='none'" style="padding: 6px 15px; cursor: pointer; background-color: #3498db; color: white; border: none; border-radius: 4px;">Зрозуміло</button>
    `;
    popup.style.display = 'block';
}

// 3. ФУНКЦІЇ РЕНДЕРИНГУ
function renderStudents() {
    const tbody = document.getElementById('students-list');
    tbody.innerHTML = students.map((student, index) => `
        <tr>
            <td onclick="editCell(this, 'students', ${index}, 'fullName')">${student.fullName}</td>
            <td onclick="editCell(this, 'students', ${index}, 'grade')">${student.grade}</td>
            <td onclick="editCell(this, 'students', ${index}, 'birthDate')">${student.birthDate}</td>
            <td onclick="editCell(this, 'students', ${index}, 'phone')">${student.phone}</td>
            <td onclick="editCell(this, 'students', ${index}, 'address')">${student.address}</td>
            <td onclick="editCell(this, 'students', ${index}, 'gpa')">${student.gpa}</td>
            <td onclick="editCell(this, 'students', ${index}, 'email')">${student.email}</td>
            <td style="text-align: center; cursor: pointer; color: red; font-weight: bold;" onclick="deleteStudent(${index})">❌</td>
        </tr>
    `).join('');
}

function renderTeachers() {
    const tbody = document.getElementById('teachers-list');
    tbody.innerHTML = teachers.map((teacher, index) => `
        <tr>
            <td onclick="editCell(this, 'teachers', ${index}, 'fullName')">${teacher.fullName}</td>
            <td onclick="editCell(this, 'teachers', ${index}, 'subject')">${teacher.subject}</td>
            <td onclick="editCell(this, 'teachers', ${index}, 'experience')">${teacher.experience}</td>
            <td onclick="editCell(this, 'teachers', ${index}, 'category')">${teacher.category}</td>
            <td onclick="editCell(this, 'teachers', ${index}, 'rate')">${teacher.rate}</td>
            <td onclick="editCell(this, 'teachers', ${index}, 'phone')">${teacher.phone}</td>
            <td onclick="editCell(this, 'teachers', ${index}, 'email')">${teacher.email}</td>
            <td style="text-align: center; cursor: pointer; color: red; font-weight: bold;" onclick="deleteTeacher(${index})">❌</td>
        </tr>
    `).join('');
}

function renderSubjects() {
    const tbody = document.getElementById('subjects-list');
    tbody.innerHTML = subjects.map((subject, index) => `
        <tr>
            <td onclick="editCell(this, 'subjects', ${index}, 'title')">${subject.title}</td>
            <td onclick="editCell(this, 'subjects', ${index}, 'hours')">${subject.hours}</td>
            <td onclick="editCell(this, 'subjects', ${index}, 'teacher')">${subject.teacher}</td>
            <td onclick="editCell(this, 'subjects', ${index}, 'grade')">${subject.grade}</td>
            <td onclick="editCell(this, 'subjects', ${index}, 'type')">${subject.type}</td>
            <td onclick="editCell(this, 'subjects', ${index}, 'room')">${subject.room}</td>
            <td onclick="editCell(this, 'subjects', ${index}, 'semester')">${subject.semester}</td>
            <td style="text-align: center; cursor: pointer; color: red; font-weight: bold;" onclick="deleteSubject(${index})">❌</td>
        </tr>
    `).join('');
}

// 4. ЛОГІКА ВИДАЛЕННЯ ТА ПЕРЕВІРКИ ЗВ'ЯЗКІВ
function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

function deleteTeacher(index) {
    const teacher = teachers[index];
    const isTeacherInSubjects = subjects.some(sub => sub.teacher === teacher.fullName);

    if (isTeacherInSubjects) {
        showErrorPopup(`Дані використовуються в іншій таблиці ("Предмети"), тому наразі видалити вчителя ${teacher.fullName} неможливо!`);
        return;
    }

    teachers.splice(index, 1);
    renderTeachers();
}

function deleteSubject(index) {
    const subject = subjects[index];
    const isSubjectInTeachers = teachers.some(t => t.subject === subject.title);

    if (isSubjectInTeachers) {
        showErrorPopup(`Дані використовуються в іншій таблиці ("Вчителі"), тому наразі видалити предмет "${subject.title}" неможливо!`);
        return;
    }

    subjects.splice(index, 1);
    renderSubjects();
}

// 5. РЕДАГУВАННЯ КОМІРКИ ПРИ КЛІКУ
function editCell(td, tableType, index, key) {
    if (td.querySelector('input')) return;

    const oldValue = td.innerText;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = oldValue;
    input.style.width = '90%';

    td.innerText = '';
    td.appendChild(input);
    input.focus();

    let isSaved = false;

    function save() {
        if (isSaved) return;
        isSaved = true;

        const newValue = input.value.trim() || oldValue;

        if (tableType === 'students') {
            students[index][key] = newValue;
            renderStudents();
        } else if (tableType === 'teachers') {
            teachers[index][key] = newValue;
            renderTeachers();
        } else if (tableType === 'subjects') {
            subjects[index][key] = newValue;
            renderSubjects();
        }
    }

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') save();
    });

    input.addEventListener('blur', save);
}

// Початковий виклик
renderStudents();
renderTeachers();
renderSubjects();