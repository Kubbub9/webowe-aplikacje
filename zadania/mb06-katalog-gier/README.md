# Katalog gier planszowych

Serwer udostępniający katalog gier planszowych. Zwraca pełną listę,
pojedynczą grę po numerze, wynik wyszukiwania z filtrami oraz statystyki
katalogu.

## Informacje o środowisku

- System operacyjny: Windows 10
- Środowisko programistyczne: Visual Studio Code
- Języki i technologie: JavaScript, Node.js, Express 5

## Uruchomienie

```
npm install
npm run dev
```

Serwer działa pod adresem http://localhost:3000

`npm install` jest konieczne po sklonowaniu repozytorium 


## Struktura projektu

| Plik | Zawartość |
|---|---|
| `serwer.js` | trasy i uruchomienie serwera |
| `dane.js` | katalog gier |
| `package.json` | zależności i skrypty |
| `.gitignore` | wyklucza `node_modules` z repozytorium |

## Skrypty

| Polecenie | Działanie |
|---|---|
| `npm install` | instaluje zależności |
| `npm start` | uruchamia serwer |
| `npm run dev` | uruchamia serwer z automatycznym restartem po zmianie pliku |

## Trasy

| Metoda | Adres | Opis | Odpowiedź |
|---|---|---|---|
| GET | `/` | strona powitalna | HTML |
| GET | `/gry` | pełna lista gier | JSON |
| GET | `/gry/:id` | jedna gra; 404, gdy nie ma takiego numeru | JSON |
| GET | `/szukaj?wydawca=&max=&gracze=` | filtrowanie katalogu | JSON |
| GET | `/statystyki` | liczba gier, średnia cena, najdroższa gra | JSON |


## Przykład

```
GET /gry/6
{"id":6,"nazwa":"Patchwork","wydawca":"Lacerta","cena":99,"gracze":2}

GET /gry/999
404
{"blad":"Nie ma gry o takim numerze"}

## Autor

Jakub Czapnik klasa 4p1t
