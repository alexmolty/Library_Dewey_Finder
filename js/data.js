const BIN_ID = "6a15e8fc1e44d9583c6b72a2";
const URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// Функция скачивания данных (теперь работает без ключа, так как Bin публичный)
async function loadData() {
    try {
        const response = await fetch(`${URL}/latest`);
        if (!response.ok) throw new Error("Ошибка сети");
        const data = await response.json();
        return data.record; 
    } catch (error) {
        console.error("Ошибка загрузки:", error);
        alert("Не удалось загрузить базу библиотеки. Обновите страницу.");
        return [];
    }
}

// Функция сохранения изменений (запрашивает ключ у пользователя)
async function saveData(locations) {
    // Ищем ключ в локальной памяти браузера
    let masterKey = localStorage.getItem("admin_key");
    
    // Если ключа нет, спрашиваем его через всплывающее окно
    if (!masterKey) {
        masterKey = prompt("Требуются права администратора.\nВведите Master Key:");
        if (!masterKey) {
            alert("Сохранение отменено. Ключ не введен.");
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
                alert("Ошибка доступа: Неверный Master Key!");
                localStorage.removeItem("admin_key"); // Удаляем неправильный ключ
            }
            throw new Error("Ошибка сохранения");
        }
        
        // Если всё успешно, запоминаем ключ в браузере, чтобы не вводить каждый раз
        localStorage.setItem("admin_key", masterKey);
        
    } catch (error) {
        console.error("Ошибка сохранения:", error);
    }
}
