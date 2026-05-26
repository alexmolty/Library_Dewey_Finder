let locations = loadData();
let currentSelectedId = null;

function render() {
    const list = document.getElementById("list");
    list.innerHTML = "";
    locations.forEach(loc => {
        const div = document.createElement("div");
        div.className = "room";
        div.id = loc.id;

        const sortedItems = sortItems(loc.items);
        div.innerHTML = `<b>${loc.name}</b><div class="items">${formatItems(sortedItems)}</div>`;

        div.onclick = () => showDetails(loc.id);
        list.appendChild(div);
    });
}

function showDetails(id) {
    currentSelectedId = id;
    const loc = locations.find(l => l.id === id);

    document.querySelectorAll(".room").forEach(r => r.classList.remove("selected"));
    document.getElementById(id).classList.add("selected");

    // НОВЫЙ БЛОК: Заголовок с кнопкой редактирования имени
    let html = `
        <div class="room-header">
            <b id="room-name-display">${loc.name}</b>
            <span class="edit-name-btn" title="Edit Room Name">✎</span>
            <div id="inline-name-edit" class="hidden">
                <input type="text" id="inline-name-input" value="${loc.name}">
                <button class="confirm-name-btn">✓</button>
            </div>
        </div>
        <div class="tags-container">`;

    const sortedItems = sortItems(loc.items);
    sortedItems.forEach(i => {
        const displayVal = i.type === "range" ? `${i.from}-${i.to}` : i.value;
        const v1 = i.type === "range" ? i.from : i.value;
        const v2 = i.type === "range" ? i.to : '';

        html += `<span class="tag">
                    ${displayVal} 
                    <span class="remove-tag" data-type="${i.type}" data-v1="${v1}" data-v2="${v2}">&times;</span>
                 </span>`;
    });

    html += `
        <button class="add-tag-btn" title="Add items">+</button>

        <button class="delete-room-btn">
            Delete Location
        </button>
        <div id="inline-add-container" class="hidden">
            <input type="text" id="inline-add-input" placeholder="e.g. 515.2, 600-700">
            <button class="confirm-add-btn">✓</button>
        </div>
    </div>`;

    document.getElementById("details").innerHTML = html;
}

// --- ДЕЛЕГИРОВАНИЕ СОБЫТИЙ ---
const detailsPanel = document.getElementById("details");

detailsPanel.addEventListener("click", (e) => {
    if (!currentSelectedId) return;
    const loc = locations.find(l => l.id === currentSelectedId);

    // 1. Удаление тега
    if (e.target.classList.contains("remove-tag")) {
        const type = e.target.dataset.type;
        const v1 = e.target.dataset.v1;
        const v2 = e.target.dataset.v2;

        loc.items = loc.items.filter(i => {
            if (type === "point") return !(i.type === "point" && i.value === v1);
            return !(i.type === "range" && i.from === v1 && i.to === v2);
        });
        finishEdit();
    }

    // 2. Кнопка Плюс (Добавить индексы)
    else if (e.target.classList.contains("add-tag-btn")) {
        e.target.style.display = "none";
        const container = document.getElementById("inline-add-container");
        container.classList.remove("hidden");
        document.getElementById("inline-add-input").focus();
    }

    // 3. Галочка подтверждения (Добавить индексы)
    else if (e.target.classList.contains("confirm-add-btn")) {
        processInlineAdd(loc);
    }

    // 4. Кнопка изменения ИМЕНИ
    else if (e.target.classList.contains("edit-name-btn")) {
        e.target.style.display = "none"; // Прячем карандаш
        document.getElementById("room-name-display").style.display = "none"; // Прячем текст имени
        const container = document.getElementById("inline-name-edit");
        container.classList.remove("hidden"); // Показываем инпут

        const inputEl = document.getElementById("inline-name-input");
        inputEl.focus();
        // Ставим курсор в конец текста
        inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length);
    }

    // 5. Галочка подтверждения ИМЕНИ
    else if (e.target.classList.contains("confirm-name-btn")) {
        processNameEdit(loc);
    }
// Удаление локации
    else if (e.target.classList.contains("delete-room-btn")) {

        const confirmed = confirm(
            `Delete "${loc.name}" ?`
        );

        if (!confirmed) return;

        locations = locations.filter(
            l => l.id !== loc.id
        );

        saveData(locations);

        render();

        resetUI();
    }

});

// Слушаем Enter в обоих инпутах
detailsPanel.addEventListener("keydown", (e) => {
    if (!currentSelectedId) return;
    const loc = locations.find(l => l.id === currentSelectedId);

    if (e.key === "Enter") {
        if (e.target.id === "inline-add-input") {
            processInlineAdd(loc);
        } else if (e.target.id === "inline-name-input") {
            processNameEdit(loc);
        }
    }
});

// Логика переименования
function processNameEdit(loc) {
    const inputEl = document.getElementById("inline-name-input");
    const newName = inputEl.value.trim();

    if (newName) {
        loc.name = newName;
        finishEdit(); // Сохраняем и перерисовываем
    } else {
        showDetails(currentSelectedId); // Если стерли всё, просто возвращаем старое имя
    }
}
// Логика добавления тегов
function processInlineAdd(loc) {
    const inputEl = document.getElementById("inline-add-input");
    const inputVal = inputEl.value.trim();

    if (!inputVal) {
        showDetails(currentSelectedId); // Сброс UI, если ничего не ввели
        return;
    }

    const newItems = parseInput(inputVal);
    newItems.forEach(newItem => {
        let exists = false;
        if (newItem.type === "point") {
            exists = loc.items.some(i => i.type === "point" && i.value === newItem.value);
        } else if (newItem.type === "range") {
            exists = loc.items.some(i => i.type === "range" && i.from === newItem.from && i.to === newItem.to);
        }
        if (!exists) loc.items.push(newItem);
    });

    finishEdit();
}

function finishEdit() {
    saveData(locations);
    render();
    showDetails(currentSelectedId);
}

// --- ПОИСК И ОБЩЕЕ УПРАВЛЕНИЕ ---

function runSearch() {
    const q = document.getElementById("search").value.trim();
    if (!q) return;

    document.querySelectorAll(".room").forEach(r => r.classList.remove("main", "secondary"));

    let results = locations.map(l => ({ ...l, score: matchDewey(l, q) }))
        .filter(l => l.score > 0)
        .sort((a, b) => b.score - a.score);

    if (results.length) {
        document.getElementById(results[0].id).classList.add("main");
        showDetails(results[0].id);
        results.slice(1).forEach(r => document.getElementById(r.id).classList.add("secondary"));
    } else {
        document.getElementById("details").innerHTML = "No matches found";
        currentSelectedId = null;
    }
}

function resetUI() {
    document.getElementById("search").value = "";
    document.querySelectorAll(".room").forEach(r => r.classList.remove("main", "secondary", "selected"));
    document.getElementById("details").innerHTML = "Click a location to see all books... (Click items to edit)";
    currentSelectedId = null;
}
document.getElementById("btn-add-location")
    .addEventListener("click", addLocation);

function addLocation() {

    const name = prompt("Location name:");

    if (!name || !name.trim()) return;

    const id =
        "loc_" + Date.now();

    locations.push({
        id,
        name: name.trim(),
        items: []
    });

    saveData(locations);

    render();
}

function exportData() {
    const dataStr = JSON.stringify(locations, null, 2);
    const blob = new Blob([dataStr], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "library_data.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (Array.isArray(importedData)) {
                locations = importedData;
                saveData(locations);
                render();
                document.getElementById("details").innerHTML = "Data imported successfully! Click a room to view.";
                currentSelectedId = null;
            } else alert("Format error: Data is not an array.");
        } catch (err) { alert("Error parsing file."); }
        event.target.value = "";
    };
    reader.readAsText(file);
}

// --- EVENT LISTENERS ---
document.getElementById("btn-search").addEventListener("click", runSearch);
document.getElementById("btn-reset").addEventListener("click", resetUI);
document.getElementById("btn-export").addEventListener("click", exportData);
document.getElementById("btn-trigger-import").addEventListener("click", () => document.getElementById("fileInput").click());
document.getElementById("fileInput").addEventListener("change", handleImport);

document.getElementById("search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") runSearch();
});

// Запуск
render();