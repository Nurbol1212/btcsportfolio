let students = JSON.parse(localStorage.getItem("students")) || [
    { name: "Адилов Абулхаир", photo: "", details: "", achievements: [] },
    { name: "Айдарова Дания", photo: "", details: "", achievements: [] },
    { name: "Альжанов Жанибек", photo: "", details: "", achievements: [] }
];

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

function renderStudents(filter = "") {
    const studentList = document.getElementById("students");
    studentList.innerHTML = "";
    students.forEach((student, index) => {
        if (student.name.toLowerCase().includes(filter.toLowerCase())) {
            const li = document.createElement("li");
            li.textContent = student.name;
            li.addEventListener("click", () => openPortfolio(index));
            studentList.appendChild(li);
        }
    });
}

document.getElementById("search").addEventListener("input", function() {
    renderStudents(this.value);
});

let currentStudentIndex = null;

function openPortfolio(index) {
    currentStudentIndex = index;
    const student = students[index];
    const modal = document.getElementById("portfolio-modal");
    const portfolioContent = document.getElementById("portfolio-content");

    let photoHTML = student.photo
        ? `<img src="${student.photo}" alt="Фото ученика" class="student-photo">`
        : `<div class="student-photo">Пусто</div>`;

    let detailsHTML = `<p><strong>ФИО:</strong> ${student.name}</p>
                       <p><strong>Основные данные:</strong> ${student.details || "Пусто"}</p>`;

    let achievementsHTML = student.achievements.length
        ? student.achievements.map(ach => `<p><strong>${ach.type}:</strong> ${ach.description}</p>`).join("")
        : `<p><strong>Достижения:</strong> Пусто</p>`;

    portfolioContent.innerHTML = photoHTML + detailsHTML + achievementsHTML;
    modal.style.display = "flex";
}

function closePortfolio() {
    document.getElementById("portfolio-modal").style.display = "none";
}

function downloadAchievements() {
    if (currentStudentIndex === null) return;
    const student = students[currentStudentIndex];
    let docContent = `ФИО: ${student.name}\nДостижения:\n`;
    student.achievements.forEach(ach => {
        docContent += `- ${ach.type}: ${ach.description}\n`;
    });

    let blob = new Blob([docContent], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${student.name}_достижения.doc`;
    link.click();
}

renderStudents();
