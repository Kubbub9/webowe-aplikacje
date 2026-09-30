const kursy = [
    { nazwa: "JavaScript",  godziny: 40, platny: true },
    { nazwa: "HTML i CSS",  godziny: 25, platny: false },
    { nazwa: "React",       godziny: 60, platny: true },
    { nazwa: "Git",         godziny: 10, platny: false },
    { nazwa: "SQL",         godziny: 30, platny: true },
    { nazwa: "Node.js",     godziny: 45, platny: false }
];


const budujListe = dane =>
    dane.map(({nazwa, godziny, platny}) =>
        `<li class="${godziny > 30 ? "wyrozniony" : ""}">${nazwa} -> ${godziny}h</li>`
    ).join("");

const przefiltrowane = kursy.filter((kursy) => kursy.platny === true );
const podsumowanie = przefiltrowane.reduce((suma, {godziny}) => suma + godziny, 0);
document.querySelector('#lista').innerHTML = budujListe(przefiltrowane);
document.querySelector('#podsumowanie').textContent = `Łącznie ${podsumowanie}h`;
