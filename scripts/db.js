// 2. נייצא את הנתונים הנדרשים מקובץ העזר
// export - כך מייצאים נתונים מקובץ
// public הופכים את כל מה שרוצים
// export const catalog = [
const catalog = [
    {
        title: "Empire Burlesque",
        artist: "Bob Dylan",
        country: "USA",
        company: "Columbia",
        price: 10.90,
        year: 1985
    },
    {
        title: "Hide your heart",
        artist: "Bonnie Tyler",
        country: "UK",
        company: "CBS Records",
        price: 9.90,
        year: 1988
    },
    {
        title: "Greatest Hits",
        artist: "Dolly Parton",
        country: "USA",
        company: "RCA",
        price: 9.90,
        year: 1982
    },
    {
        title: "Still got the blues",
        artist: "Gary Moore",
        country: "UK",
        company: "Virgin records",
        price: 10.20,
        year: 1990
    },
    {
        title: "Eros",
        artist: "Eros Ramazzotti",
        country: "EU",
        company: "BMG",
        price: 9.90,
        year: 1997
    },
    {
        title: "One night only",
        artist: "Bee Gees",
        country: "UK",
        company: "Polydor",
        price: 10.90,
        year: 1998
    },
    {
        title: "Sylvias Mother",
        artist: "Dr.Hook",
        country: "UK",
        company: "CBS",
        price: 8.10,
        year: 1973
    },
    {
        title: "Maggie May",
        artist: "Rod Stewart",
        country: "UK",
        company: "Pickwick",
        price: 8.50,
        year: 1990
    },
    {
        title: "Romanza",
        artist: "Andrea Bocelli",
        country: "EU",
        company: "Polydor",
        price: 10.80,
        year: 1996
    },
    {
        title: "When a man loves a woman",
        artist: "Percy Sledge",
        country: "USA",
        company: "Atlantic",
        price: 8.70,
        year: 1987
    },
    {
        title: "Black angel",
        artist: "Savage Rose",
        country: "EU",
        company: "Mega",
        price: 10.90,
        year: 1995
    },
    {
        title: "1999 Grammy Nominees",
        artist: "Many",
        country: "USA",
        company: "Grammy",
        price: 10.20,
        year: 1999
    }
];

for (let i = 0; i < catalog.length; i++) {
    catalog[i].id = 1000 + i;
    catalog[i].amount = 100;
}

function printCatalogCount() {
    console.log(catalog.length);    
}

printCatalogCount();

export default catalog;