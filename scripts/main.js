const el = {
    catalog: document.querySelector('#catalog-container')
};

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

    return card;
};

for (const cd of catalog) {
    el.catalog.append(createCard(cd));
}