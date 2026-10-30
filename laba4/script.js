/**
 * Шкільна система управління даними (Лабораторна №4)
 */

// --- 1. ПОЧАТКОВІ ДАНІ (fallback для першого запуску) ---
const INITIAL_DATA = {
    students: [
        { fullName: "Іваненко Іван", grade: "10-А", birthDate: "15.03.2010", phone: "099-111-22-33", address: "Дніпро", gpa: 10.2, email: "ivan@gmail.com" },
        { fullName: "Петренко Анна", grade: "10-А", birthDate: "21.07.2010", phone: "097-222-33-44", address: "Дніпро", gpa: 11.1, email: "anna@gmail.com" },
        { fullName: "Сидоренко Олег", grade: "10-Б", birthDate: "05.11.2009", phone: "050-333-44-55", address: "Київ", gpa: 9.5, email: "oleg@gmail.com" },
        { fullName: "Коваль Марія", grade: "10-Б", birthDate: "12.01.2010", phone: "063-444-55-66", address: "Львів", gpa: 11.8, email: "maria@gmail.com" }
    ],
    teachers: [
        { fullName: "Коваленко Олена", subject: "Математика", experience: "15 років", category: "Вища", rate: 1.0, phone: "099-333-44-55", email: "kovalenko@gmail.com" },
        { fullName: "Шевченко Петро", subject: "Інформатика", experience: "8 років", category: "Перша", rate: 1.0, phone: "097-444-55-66", email: "shevchenko@gmail.com" },
        { fullName: "Бондаренко Ірина", subject: "Фізика", experience: "12 років", category: "Вища", rate: 0.75, phone: "050-555-66-77", email: "bondarenko@gmail.com" },
        { fullName: "Ткаченко Сергій", subject: "Історія", experience: "5 років", category: "Друга", rate: 1.0, phone: "063-666-77-88", email: "tkachenko@gmail.com" }
    ],
    subjects: [
        { title: "Математика", hours: 4, teacher: "Коваленко Олена", grade: "10-А", type: "Основний", room: 205, semester: 1 },
        { title: "Інформатика", hours: 2, teacher: "Шевченко Петро", grade: "10-А", type: "Основний", room: 301, semester: 1 },
        { title: "Фізика", hours: 3, teacher: "Бондаренко Ірина", grade: "10-Б", type: "Основний", room: 104, semester: 1 },
        { title: "Історія", hours: 2, teacher: "Ткаченко Сергій", grade: "10-Б", type: "Основний", room: 210, semester: 1 }
    ]
};

// --- 2. СТАН ПРОГРАМИ ТА LOCALSTORAGE ---
const DB_PREFIX = 'school_db_';
const state = { students: [], teachers: [], subjects: [] };

const Storage = {
    get: (key) => {
        const raw = localStorage.getItem(DB_PREFIX + key);
        return raw ? JSON.parse(raw) : null;
    },
    set: (key, val) => localStorage.setItem(DB_PREFIX + key, JSON.stringify(val))
};

function loadData() {
    Object.keys(state).forEach(key => {
        state[key] = Storage.get(key) ?? INITIAL_DATA[key];
    });
    renderAll();
}

function saveData(key) {
    if (key) {
        Storage.set(key, state[key]);
    } else {
        Object.keys(state).forEach(k => Storage.set(k, state[k]));
    }
    renderAll();
}

// --- 3. ШАБЛОНИ ТАБЛИЦЬ (HTML РЕНДЕР) ---
const tableTemplates = {
    students: (s, i) => `
        <tr>
            <td>${s.fullName}</td><td>${s.grade}</td><td>${s.birthDate}</td>
            <td>${s.phone}</td><td>${s.address}</td><td>${s.gpa}</td><td>${s.email}</td>
            <td><button onclick="removeItem('students', ${i})">Видалити</button></td>
        </tr>`,

    teachers: (t, i) => `
        <tr>
            <td>${t.fullName}</td><td>${t.subject}</td><td>${t.experience}</td>
            <td>${t.category}</td><td>${t.rate}</td><td>${t.phone}</td><td>${t.email}</td>
            <td><button onclick="removeItem('teachers', ${i})">Видалити</button></td>
        </tr>`,

    subjects: (sb, i) => `
        <tr>
            <td>${sb.title}</td><td>${sb.hours}</td><td>${sb.teacher}</td>
            <td>${sb.grade}</td><td>${sb.type}</td><td>${sb.room}</td><td>${sb.semester}</td>
            <td><button onclick="removeItem('subjects', ${i})">Видалити</button></td>
        </tr>`
};

function renderAll() {
    // Рендеринг всіх 3 таблиць
    Object.keys(tableTemplates).forEach(type => {
        const tbody = document.getElementById(`${type}-list`);
        if (tbody) {
            tbody.innerHTML = state[type].map(tableTemplates[type]).join('');
        }
    });

    // Оновлення випадного списку вчителів у формі предметів (Вимога №4)
    updateTeacherSelect();
}

function updateTeacherSelect() {
    const select = document.getElementById('sb-teacher-select');
    if (!select) return;

    const options = state.teachers.map(t => `<option value="${t.fullName}">${t.fullName} (${t.subject})</option>`);
    select.innerHTML = '<option value="">-- Оберіть вчителя --</option>' + options.join('');
}

// --- 4. CRUD ОПЕРАЦІЇ (ДОДАВАННЯ / ВИДАЛЕННЯ) ---
function removeItem(type, index) {
    state[type].splice(index, 1);
    saveData(type);
}

function addEntity(event, type, getFormData) {
    event.preventDefault();
    state[type].push(getFormData());
    saveData(type);
    event.target.reset();
}

const addStudent = (e) => addEntity(e, 'students', () => ({
    fullName: document.getElementById('st-fullName').value,
    grade: document.getElementById('st-grade').value,
    birthDate: document.getElementById('st-birthDate').value,
    phone: document.getElementById('st-phone').value,
    address: document.getElementById('st-address').value,
    gpa: Number(document.getElementById('st-gpa').value),
    email: document.getElementById('st-email').value
}));

const addTeacher = (e) => addEntity(e, 'teachers', () => ({
    fullName: document.getElementById('tc-fullName').value,
    subject: document.getElementById('tc-subject').value,
    experience: document.getElementById('tc-experience').value,
    category: document.getElementById('tc-category').value,
    rate: Number(document.getElementById('tc-rate').value),
    phone: document.getElementById('tc-phone').value,
    email: document.getElementById('tc-email').value
}));

const addSubject = (e) => addEntity(e, 'subjects', () => ({
    title: document.getElementById('sb-title').value,
    hours: Number(document.getElementById('sb-hours').value),
    teacher: document.getElementById('sb-teacher-select').value,
    grade: document.getElementById('sb-grade').value,
    type: document.getElementById('sb-type').value,
    room: Number(document.getElementById('sb-room').value),
    semester: Number(document.getElementById('sb-semester').value)
}));

// --- 5. ВІДОБРАЖЕННЯ ВКЛАДОК ТА СИНХРОНІЗАЦІЯ ---
function showTable(id) {
    ['students', 'teachers', 'subjects'].forEach(tabId => {
        const elem = document.getElementById(tabId);
        if (elem) elem.style.display = tabId === id ? 'block' : 'none';
    });
}

// Подія storage (Вимога №3)
window.addEventListener('storage', (e) => {
    if (e.key?.startsWith(DB_PREFIX)) loadData();
});

// Старт
loadData();