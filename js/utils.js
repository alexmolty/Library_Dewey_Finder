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

    let score = 0;

    loc.items.forEach(item => {

        // POINT
        if (item.type === "point") {

            // exact
            if (item.value === q) {

                score += 100;
            }

            // category relation
            else if (
                item.value.startsWith(q) ||
                q.startsWith(item.value)
            ) {

                score += 30;
            }
        }

        // RANGE
        else if (item.type === "range") {

            const afterStart =
                compareDewey(q, item.from) >= 0;

            const beforeEnd =
                compareDewey(q, item.to) <= 0;

            if (afterStart && beforeEnd) {

                score += 80;
            }
        }
    });

    return score;
}