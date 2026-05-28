function normalizeDewey(str) {

    const parts = str.split(".");

    const main = parts[0].padStart(3, "0");

    const decimals = parts
        .slice(1)
        .map(p => p.padEnd(3, "0"))
        .join("");

    return (main + decimals).padEnd(12, "0");
}

function compareDewey(a, b) {

    const normA = normalizeDewey(a);
    const normB = normalizeDewey(b);

    if (normA < normB) return -1;
    if (normA > normB) return 1;

    return 0;
}

function sortItems(items) {

    return [...items].sort((a, b) => {

        const valA =
            a.type === "range"
                ? a.from
                : a.value;

        const valB =
            b.type === "range"
                ? b.from
                : b.value;

        return compareDewey(valA, valB);
    });
}

function formatItems(items) {

    return items
        .map(i =>
            i.type === "range"
                ? `${i.from}-${i.to}`
                : i.value
        )
        .join(", ");
}

function parseInput(input) {

    return input
        .split(",")
        .map(s => s.trim())
        .filter(s => s !== "")
        .map(val => {

            if (val.includes("-")) {

                const [from, to] =
                    val.split("-").map(v => v.trim());

                return {
                    type: "range",
                    from,
                    to
                };

            } else {

                return {
                    type: "point",
                    value: val
                };
            }
        });
}

function matchDewey(loc, q) {
    let maxScore = 0;
    const normQ = normalizeDewey(q); // Нормализуем запрос один раз для ranges

    loc.items.forEach(item => {
        let itemScore = 0;

        // POINT
        if (item.type === "point") {
            if (item.value === q) {
                itemScore = 100;
            } else if (item.value.startsWith(q)) {
                itemScore = 50;
            } else if (q.startsWith(item.value)) {
                itemScore = 30;
            }
        } 
        // RANGE (Умный подсчет вложенности)
        else if (item.type === "range") {
            const normFrom = normalizeDewey(item.from);
            const normTo = normalizeDewey(item.to);

            // Если книга попадает в диапазон
            if (normQ >= normFrom && normQ <= normTo) {
                // Вычисляем, насколько похожи цифры (глубина префикса)
                let commonPrefixLen = 0;
                for(let i = 0; i < normQ.length; i++) {
                    if (normQ[i] === normFrom[i]) commonPrefixLen++;
                    else break; // Прерываем, как только цифры разошлись
                }
                
                // Базовый балл за диапазон (70) + бонус за точность совпадения (от 0 до 12)
                itemScore = 70 + commonPrefixLen; 
            }
        }

        if (itemScore > maxScore) {
            maxScore = itemScore;
        }
    });

    return maxScore;
}
