const BIN_ID = "6a15e8fc1e44d9583c6b72a2";
const URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// Функция скачивания данных (теперь работает без ключа, так как Bin публичный)
async function loadData() {
    try {
        const response = await fetch(`${URL}/latest`);
        if (!response.ok) throw new Error("Error loading");
        const data = await response.json();
        return data.record; 
    } catch (error) {
        console.error("Failed to load:", error);
        alert("Failed to load library database. Refresh the page.");
        return [];
    }
}

// Функция сохранения изменений (запрашивает ключ у пользователя)
async function saveData(locations) {
    // Ищем ключ в локальной памяти браузера
    let masterKey = localStorage.getItem("admin_key");
    
    // Если ключа нет, спрашиваем его через всплывающее окно
    if (!masterKey) {
        masterKey = prompt("Administrator rights are required.\nEnter Master Key:");
        if (!masterKey) {
            alert("Save cancelled. Key not entered.");
            return; // Прерываем сохранение, если нажали Отмена
        }
    }

    try {
        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": masterKey
            },
            body: JSON.stringify(locations)
        });
        
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                alert("Access error: Invalid Master Key!");
                localStorage.removeItem("admin_key"); // Удаляем неправильный ключ
            }
            throw new Error("Saving error");
        }
        
        // Если всё успешно, запоминаем ключ в браузере, чтобы не вводить каждый раз
        localStorage.setItem("admin_key", masterKey);
        localStorage.setItem("lib_cache", JSON.stringify(locations));
        localStorage.setItem("lib_cache_time", Date.now()); // Обновляем время у того, кто вносил изменения
    } catch (error) {
        console.error("Saving error:", error);
    }
}
