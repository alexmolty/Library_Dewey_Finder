// Словарь предметных рубрик (текст -> индекс)
const subjectDictionary = {
    // Computer Science / Programming
    "computer science": "004",
    "מחשבים": "004",
    "information technology": "004",
    "טכנולוגיית מידע": "004",

    "computer architecture": "004.36",
    "ארכיטקטורת מחשבים": "004.36",
    "hardware systems": "004.36",
    "חומרת מחשב": "004.36",

    "programming": "005.1",
    "תכנות": "005.1",
    "software development": "005.1",
    "פיתוח תוכנה": "005.1",

    "programming languages": "005.13",
    "שפות תכנות": "005.13",
    "coding": "005.13",
    "קוד": "005.13",

    "java": "005.133",
    "ג'אווה": "005.133",
    "object oriented programming": "005.133",
    "תכנות מונחה עצמים": "005.133",

    "database systems": "005.74",
    "מסדי נתונים": "005.74",
    "sql": "005.74",
    "ניהול בסיסי נתונים": "005.74",

    "artificial intelligence": "006.3",
    "בינה מלאכותית": "006.3",
    "machine learning": "006.3",
    "למידת מכונה": "006.3",

    "neural networks": "006.32",
    "רשתות נוירונים": "006.32",
    "deep learning": "006.32",
    "למידה עמוקה": "006.32",

    "natural language processing": "006.332",
    "עיבוד שפה טבעית": "006.332",
    "nlp": "006.332",
    "בלשנות חישובית": "006.332",

    "multimedia systems": "006.6",
    "מערכות מולטימדיה": "006.6",
    "digital media": "006.6",
    "מדיה דיגיטלית": "006.6",

    // Library Science
    "library science": "020.61",
    "מדעי הספרנות": "020.61",
    "academic libraries": "020.61",
    "ספריות אקדמיות": "020.61",

    "digital libraries": "025.04",
    "ספריות דיגיטליות": "025.04",
    "information retrieval": "025.04",
    "אחזור מידע": "025.04",

    // General Knowledge
    "encyclopedias": "030",
    "אנציקלופדיות": "030",
    "reference works": "030",
    "ספרי עיון": "030",

    // Information Theory
    "systems theory": "003.54",
    "תורת המערכות": "003.54",
    "cybernetics": "003.54",
    "קיברנטיקה": "003.54",

    "information systems": "003.56",
    "מערכות מידע": "003.56",
    "data systems": "003.56",
    "מערכות נתונים": "003.56",

    // Philosophy / Psychology
    "philosophy": "111.1",
    "פילוסופיה": "111.1",
    "metaphysics": "111.1",
    "מטאפיזיקה": "111.1",

    "epistemology": "112",
    "אפיסטמולוגיה": "112",
    "theory of knowledge": "112",
    "תורת הידע": "112",

    "psychology": "150",
    "פסיכולוגיה": "150",
    "cognitive psychology": "150",
    "פסיכולוגיה קוגניטיבית": "150",

    "educational psychology": "150.072.7",
    "פסיכולוגיה חינוכית": "150.072.7",
    "learning psychology": "150.072.7",
    "פסיכולוגיית למידה": "150.072.7",

    "cognition": "153",
    "קוגניציה": "153",
    "thinking": "153",
    "חשיבה": "153",

    "child psychology": "155.63",
    "פסיכולוגיית ילדים": "155.63",
    "developmental psychology": "155.63",
    "פסיכולוגיה התפתחותית": "155.63",

    // Mathematics
    "mathematics": "510",
    "מתמטיקה": "510",
    "applied mathematics": "510",
    "מתמטיקה שימושית": "510",

    "philosophy of mathematics": "510.1",
    "פילוסופיה של המתמטיקה": "510.1",
    "mathematical foundations": "510.1",
    "יסודות המתמטיקה": "510.1",

    "mathematics education": "510.52",
    "הוראת מתמטיקה": "510.52",
    "math teaching": "510.52",
    "לימודי מתמטיקה": "510.52",

    "algebra": "512",
    "אלגברה": "512",
    "abstract algebra": "512",
    "אלגברה מופשטת": "512",

    "linear algebra": "512.5",
    "אלגברה ליניארית": "512.5",
    "matrices": "512.5",
    "מטריצות": "512.5",

    "geometry": "513.4",
    "גיאומטריה": "513.4",
    "analytic geometry": "513.4",
    "גיאומטריה אנליטית": "513.4",

    "calculus": "515",
    "חדו\"א": "515",
    "mathematical analysis": "515",
    "אנליזה מתמטית": "515",

    "differential calculus": "515.2",
    "חשבון דיפרנציאלי": "515.2",
    "integral calculus": "515.2",
    "חשבון אינטגרלי": "515.2",

    "differential equations": "515.35",
    "משוואות דיפרנציאליות": "515.35",
    "ordinary differential equations": "515.35",
    "מד\"ר": "515.35",

    "numerical analysis": "515.93",
    "אנליזה נומרית": "515.93",
    "scientific computing": "515.93",
    "חישוב מדעי": "515.93",

    "logic": "511.2",
    "לוגיקה": "511.2",
    "mathematical logic": "511.2",
    "לוגיקה מתמטית": "511.2",

    "set theory": "511.8",
    "תורת הקבוצות": "511.8",
    "sets": "511.8",
    "קבוצות": "511.8",

    "probability": "519.1",
    "הסתברות": "519.1",
    "probability theory": "519.1",
    "תורת ההסתברות": "519.1",

    "statistics": "519.2",
    "סטטיסטיקה": "519.2",
    "statistical analysis": "519.2",
    "ניתוח סטטיסטי": "519.2",

    // Physics
    "physics": "530",
    "פיזיקה": "530",
    "classical physics": "530",
    "פיזיקה קלאסית": "530",

    "mechanics": "531",
    "מכניקה": "531",
    "engineering mechanics": "531",
    "מכניקה הנדסית": "531",

    "fluid mechanics": "531.32",
    "מכניקת זורמים": "531.32",
    "fluid dynamics": "531.32",
    "דינמיקת זורמים": "531.32",

    "optics": "535",
    "אופטיקה": "535",
    "light": "535",
    "אור": "535",

    "lasers": "535.5",
    "לייזרים": "535.5",
    "laser optics": "535.5",
    "אופטיקת לייזר": "535.5",

    "heat transfer": "536.7",
    "מעבר חום": "536.7",
    "thermodynamics": "536.7",
    "תרמודינמיקה": "536.7",

    "electricity": "537",
    "חשמל": "537",
    "electromagnetism": "537",
    "אלקטרומגנטיות": "537",

    "electrostatics": "537.12",
    "אלקטרוסטטיקה": "537.12",
    "electric fields": "537.12",
    "שדות חשמליים": "537.12",

    "semiconductors": "537.623",
    "מוליכים למחצה": "537.623",
    "solid state electronics": "537.623",
    "אלקטרוניקה במצב מוצק": "537.623",

    "modern physics": "539",
    "פיזיקה מודרנית": "539",
    "quantum physics": "539",
    "פיזיקה קוונטית": "539",

    "crystallography": "539.721",
    "קריסטלוגרפיה": "539.721",
    "crystal structures": "539.721",
    "מבנה גבישים": "539.721",

    "nuclear physics": "539.73",
    "פיזיקה גרעינית": "539.73",
    "atomic nuclei": "539.73",
    "גרעין האטום": "539.73",

    // Chemistry / Biology
    "chemistry": "540",
    "כימיה": "540",
    "chemical science": "540",
    "מדעי הכימיה": "540",

    "physical chemistry": "541",
    "כימיה פיזיקלית": "541",
    "chemical physics": "541",
    "פיזיקה כימית": "541",

    "organic chemistry": "547",
    "כימיה אורגנית": "547",
    "organic compounds": "547",
    "תרכובות אורגניות": "547",

    "earth sciences": "551",
    "מדעי כדור הארץ": "551",
    "geology": "551",
    "גיאולוגיה": "551",

    "biology": "570",
    "ביולוגיה": "570",
    "life sciences": "570",
    "מדעי החיים": "570",

    "cell biology": "571.6",
    "ביולוגיה של התא": "571.6",
    "cells": "571.6",
    "תאים": "571.6",

    "ecology": "574",
    "אקולוגיה": "574",
    "environmental biology": "574",
    "ביולוגיה סביבתית": "574",

    "microbiology": "574.192",
    "מיקרוביולוגיה": "574.192",
    "microorganisms": "574.192",
    "מיקרואורגניזמים": "574.192",

    "genetics": "575",
    "גנטיקה": "575",
    "genetic engineering": "575",
    "הנדסה גנטית": "575",

    // Medicine
    "medicine": "610",
    "רפואה": "610",
    "medical sciences": "610",
    "מדעי הרפואה": "610",

    "medical technology": "610.28",
    "טכנולוגיה רפואית": "610.28",
    "biomedical engineering": "610.28",
    "הנדסה ביו רפואית": "610.28",

    "human anatomy": "611",
    "אנטומיה": "611",
    "anatomy": "611",
    "מבנה גוף האדם": "611",

    "human physiology": "612",
    "פיזיולוגיה": "612",
    "physiology": "612",
    "תפקודי גוף": "612",

    "biophysics": "612.028",
    "ביופיזיקה": "612.028",
    "medical physics": "612.028",
    "פיזיקה רפואית": "612.028",

    "respiratory system": "612.2",
    "מערכת הנשימה": "612.2",
    "lungs": "612.2",
    "ריאות": "612.2",

    "neuroscience": "612.8",
    "מדעי המוח": "612.8",
    "nervous system": "612.8",
    "מערכת העצבים": "612.8",

    "pharmacology": "615",
    "פרמקולוגיה": "615",
    "drugs": "615",
    "תרופות": "615",

    "diseases": "616",
    "מחלות": "616",
    "pathology": "616",
    "פתולוגיה": "616",

    "cardiology": "616.12",
    "קרדיולוגיה": "616.12",
    "heart diseases": "616.12",
    "מחלות לב": "616.12",

    "medical diagnosis": "616.07",
    "אבחון רפואי": "616.07",
    "diagnostic medicine": "616.07",
    "רפואה אבחנתית": "616.07",

    "pediatrics": "618.9",
    "רפואת ילדים": "618.9",
    "children medicine": "618.9",
    "ילדים": "618.9",

    // Engineering
    "engineering": "620",
    "הנדסה": "620",
    "applied engineering": "620",
    "הנדסה שימושית": "620",

    "engineering theory": "620.001",
    "תורת ההנדסה": "620.001",
    "engineering principles": "620.001",
    "עקרונות הנדסיים": "620.001",

    "reliability engineering": "620.004",
    "הנדסת אמינות": "620.004",
    "quality engineering": "620.004",
    "איכות ואמינות": "620.004",

    "safety engineering": "620.004.2",
    "הנדסת בטיחות": "620.004.2",
    "industrial safety": "620.004.2",
    "בטיחות תעשייתית": "620.004.2",

    "engineering education": "620.007",
    "חינוך הנדסי": "620.007",
    "engineering studies": "620.007",
    "לימודי הנדסה": "620.007",

    "mechanical engineering": "620.1",
    "הנדסת מכונות": "620.1",
    "machine design": "620.1",
    "תכנון מכונות": "620.1",

    "materials engineering": "620.11",
    "הנדסת חומרים": "620.11",
    "materials science": "620.11",
    "מדע החומרים": "620.11",

    "structural analysis": "620.103",
    "ניתוח מבנים": "620.103",
    "engineering analysis": "620.103",
    "אנליזה הנדסית": "620.103",

    "finite element method": "620.104",
    "שיטת האלמנטים הסופיים": "620.104",
    "fem": "620.104",
    "אלמנטים סופיים": "620.104",

    "control engineering": "620.105",
    "הנדסת בקרה": "620.105",
    "control systems": "620.105",
    "מערכות בקרה": "620.105",

    "robotics control": "620.105.4",
    "בקרת רובוטים": "620.105.4",
    "automation control": "620.105.4",
    "בקרה אוטומטית": "620.105.4",

    "industrial engineering": "620.106",
    "הנדסת תעשייה": "620.106",
    "operations engineering": "620.106",
    "הנדסת תפעול": "620.106",

    "thermodynamics engineering": "621.042",
    "תרמודינמיקה הנדסית": "621.042",
    "energy systems": "621.042",
    "מערכות אנרגיה": "621.042",

    "heat engines": "621.402",
    "מנועי חום": "621.402",
    "engines": "621.402",
    "מנועים": "621.402",

    "internal combustion engines": "621.4021",
    "מנועי בעירה פנימית": "621.4021",
    "combustion engines": "621.4021",
    "מנועי שריפה": "621.4021",

    "electronics": "621.381",
    "אלקטרוניקה": "621.381",
    "electronic circuits": "621.381",
    "מעגלים אלקטרוניים": "621.381",

    "analog electronics": "621.381.4",
    "אלקטרוניקה אנלוגית": "621.381.4",
    "analog circuits": "621.381.4",
    "מעגלים אנלוגיים": "621.381.4",

    "digital electronics": "621.381.5",
    "אלקטרוניקה דיגיטלית": "621.381.5",
    "digital circuits": "621.381.5",
    "מעגלים דיגיטליים": "621.381.5",

    "integrated circuits": "621.38152",
    "מעגלים משולבים": "621.38152",
    "ic design": "621.38152",
    "תכנון שבבים": "621.38152",

    "logic circuits": "621.381.532",
    "מעגלים לוגיים": "621.381.532",
    "digital logic": "621.381.532",
    "לוגיקה דיגיטלית": "621.381.532",

    "microelectronics": "621.381.961",
    "מיקרואלקטרוניקה": "621.381.961",
    "semiconductor devices": "621.381.961",
    "רכיבי מוליכים למחצה": "621.381.961",

    "telecommunications": "621.382",
    "תקשורת": "621.382",
    "communication engineering": "621.382",
    "הנדסת תקשורת": "621.382",

    "wireless communication": "621.3822",
    "תקשורת אלחוטית": "621.3822",
    "mobile communication": "621.3822",
    "תקשורת סלולרית": "621.3822",

    "mechanical systems": "621.8",
    "מערכות מכניות": "621.8",
    "machine elements": "621.8",
    "אלמנטים מכניים": "621.8",

    "bearings": "621.815",
    "מיסבים": "621.815",
    "mechanical bearings": "621.815",
    "מסבים": "621.815",

    "hydraulic engineering": "621.82",
    "הנדסה הידראולית": "621.82",
    "hydraulics": "621.82",
    "הידראוליקה": "621.82",

    "civil engineering": "624",
    "הנדסה אזרחית": "624",
    "construction engineering": "624",
    "הנדסת בניין": "624",

    "soil mechanics": "624.15",
    "מכניקת קרקע": "624.15",
    "geotechnical engineering": "624.15",
    "הנדסה גיאוטכנית": "624.15",

    "steel structures": "624.17",
    "מבני פלדה": "624.17",
    "structural steel": "624.17",
    "פלדה מבנית": "624.17",

    "bridges": "624.092",
    "גשרים": "624.092",
    "bridge engineering": "624.092",
    "הנדסת גשרים": "624.092",

    "water engineering": "627",
    "הנדסת מים": "627",
    "hydraulic structures": "627",
    "מבנים הידראוליים": "627",

    "environmental engineering": "628",
    "הנדסה סביבתית": "628",
    "environmental systems": "628",
    "מערכות סביבתיות": "628",

    "aerospace engineering": "629.2",
    "הנדסת אווירונאוטיקה": "629.2",
    "aviation": "629.2",
    "תעופה": "629.2",

    "space engineering": "629.205",
    "הנדסת חלל": "629.205",
    "spacecraft": "629.205",
    "חלליות": "629.205",

    "robotics": "629.8",
    "רובוטיקה": "629.8",
    "automation": "629.8",
    "אוטומציה": "629.8",

    // Business / Management
    "management": "658",
    "ניהול": "658",
    "business management": "658",
    "ניהול עסקי": "658",

    "entrepreneurship": "658.21",
    "יזמות": "658.21",
    "startups": "658.21",
    "סטארטאפים": "658.21",

    "marketing": "658.27",
    "שיווק": "658.27",
    "digital marketing": "658.27",
    "שיווק דיגיטלי": "658.27",

    "operations management": "658.3",
    "ניהול תפעול": "658.3",
    "organizational management": "658.3",
    "ניהול ארגוני": "658.3",

    "management information systems": "658.403",
    "מערכות מידע ניהוליות": "658.403",
    "mis": "658.403",
    "ניהול מידע": "658.403",

    "decision support systems": "658.4032",
    "מערכות תומכות החלטה": "658.4032",
    "business intelligence": "658.4032",
    "בינה עסקית": "658.4032",

    "information systems management": "658.403.2",
    "ניהול מערכות מידע": "658.403.2",
    "enterprise systems": "658.403.2",
    "מערכות ארגוניות": "658.403.2",

    "production management": "658.5",
    "ניהול ייצור": "658.5",
    "industrial management": "658.5",
    "ניהול תעשייתי": "658.5",

    "quality management": "658.562",
    "ניהול איכות": "658.562",
    "quality assurance": "658.562",
    "הבטחת איכות": "658.562",

    "electronic commerce": "658.84",
    "מסחר אלקטרוני": "658.84",
    "e-commerce": "658.84",
    "סחר מקוון": "658.84",

    // Manufacturing / Construction
    "manufacturing": "670",
    "ייצור": "670",
    "industrial production": "670",
    "תעשייה": "670",

    "building materials": "691",
    "חומרי בניין": "691",
    "construction materials": "691",
    "חומרי construction": "691",

    "building services": "697",
    "מערכות בניין": "697",
    "hvac": "697",
    "מיזוג אוויר": "697",

    // Language / Literature
    "english language": "428",
    "אנגלית": "428",
    "technical english": "428",
    "אנגלית טכנית": "428",

    "english linguistics": "421",
    "בלשנות אנגלית": "421",
    "english grammar": "421",
    "דקדוק אנגלי": "421",

    "english dictionaries": "423",
    "מילונים באנגלית": "423",
    "dictionary": "423",
    "מילון": "423",

    "english grammar studies": "425",
    "לימודי דקדוק": "425",
    "grammar": "425",
    "דקדוק": "425",

    "translation": "418",
    "תרגום": "418",
    "technical translation": "418",
    "תרגום טכני": "418",

    "hebrew language": "443",
    "עברית": "443",
    "hebrew linguistics": "443",
    "בלשנות עברית": "443",

    "hebrew dictionary": "443.21",
    "מילון עברי": "443.21",
    "hebrew lexicon": "443.21",
    "לקסיקון עברי": "443.21",

    "literature": "820",
    "ספרות": "820",
    "english literature": "820",
    "ספרות אנגלית": "820",

    "american fiction": "813",
    "ספרות אמריקאית": "813",
    "fiction": "813",
    "רומן": "813",

    "english fiction": "823",
    "ספרות אנגלית יפה": "823",
    "novels": "823",
    "רומנים": "823",

    "modern english fiction": "823.91",
    "ספרות אנגלית מודרנית": "823.91",
    "modern novels": "823.91",
    "רומנים מודרניים": "823.91",

    "spanish literature": "863",
    "ספרות ספרדית": "863",
    "spanish fiction": "863",
    "רומנים בספרדית": "863"
};

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
