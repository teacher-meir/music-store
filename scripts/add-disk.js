import catalog from "./db.js";

const el = {
    form: document.querySelector('form')
};

el.form.addEventListener('submit', (ev) => {
    // פונקציה זו מתבצעת על אירוע
    // ומונעת את פעולת ברירת המחדל שקורית
    // למשל רענון הדף/שליחה לדף אחר בעת ביצוע סבמיט
    ev.preventDefault();

    const currentForm = ev.target;

    // object destructuring - ES6 פירוק אוביקט בצורה מקוצרת של
    const { title, year, artist, country } = currentForm.elements;
    console.log(title.value, year.value, country.value, artist.value);

    const newDisk = {
        id: Date.now(),
        title: title.value,
        // year: +year.value,
        year: year.valueAsNumber, // הערך באינפוט תמיד מחרוזת ולכן יש צורך בהמרה
        artist: artist.value,
        country: country.value
    };

    catalog.push(newDisk);
    console.log(catalog);

    title.value = '';
    artist.value = '';
    year.value = 2000;
    country.value = 'EU';


    // const title = currentForm.elements.title.value;
    // const year = currentForm.elements.year.value;
    // console.log(title, year);

});