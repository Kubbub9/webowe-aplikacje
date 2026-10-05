const filtrujPoKategorii = (lista, kategoria) =>
    kategoria === "wszystkie"
        ? [...lista] : lista.filter(u => u.kategoria === kategoria);


const sredniPoziom = (lista) => {
    if (lista.length === 0) {
        return 0;
    }

    const suma = lista.reduce((razem, { poziom }) => razem + poziom, 0);
    return Math.round((suma / lista.length) * 10) / 10;
};

const budujListe = (lista) =>
    lista
        .map(({ nazwa, poziom }) => `
            <li>
                <span class="nazwa">${nazwa}</span>
                <span class="poziom" title="Poziom ${poziom} z 5">${"●".repeat(poziom)}${"○".repeat(5 - poziom)}</span>
            </li>
        `)
        .join("");
