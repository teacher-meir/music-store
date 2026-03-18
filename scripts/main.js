// 3. נייבא את הנתונים הנדרשים
//    named import - אפשר לייבא רק את מה שציבורי, חובה באותו שם
//    תמיד נציין ניתוב יחסי וסיומת של קובץ
// import { catalog } from "./db.js";

// default import - באיזה שם שרוצים
// import myCatalog from "./db.js";
import { getCatalog } from "./db.js";

const el = {
    catalog: document.querySelector('#catalog-container'),
    printBtn: document.querySelector('#print-catalog'),
};

/**
 * 
 * @param {{ id: number, title: string, artist: string, country: string, company: string, price: number, year: number, amount: number }} disk 
 * @returns 
 */
const createCard = (disk) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = `./images/${disk.country}.jpg`;
    img.alt = disk.country;

    const container = document.createElement('div');
    container.classList.add('container');

    card.append(img, container);

    const head = document.createElement('h2');
    head.textContent = disk.title;

    const author = document.createElement('span');
    author.textContent = `by: ${disk.artist}`;

    const price = document.createElement('p');
    price.textContent = `${disk.price.toFixed(2)}$`;

    const amount = document.createElement('p');
    amount.textContent = `amount: ${disk.amount}`;

    container.append(head, author, price, amount);

    const link = document.createElement('a');
    link.classList.add('button');
    link.href = `details.html?id=${disk.id}`;
    link.textContent = `Show Details`;

    card.append(link);

    return card;
};

const myCatalog = getCatalog();
for (const cd of myCatalog) {
    el.catalog.append(createCard(cd));
}

el.printBtn.onclick = () => print();