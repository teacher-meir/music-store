const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grapes', 'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Strawberry'];


// IIFE - Immediately Invoked Function Expression
// פונקציה שמופעלת פעם אחת בלבד באופן מיידי
(() => {
    const myParams = new URLSearchParams(location.search);
    const q = myParams.get('query') || '';
    document.querySelector('#fruits').innerHTML = fruits.filter(f => f.includes(q));
})();