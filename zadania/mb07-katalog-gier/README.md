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
| `gry.js` | router z trasami |
| `index.html` | strona html |
| `styl.css` | style do html |
| `zapytania.http` | do sprawdzania tras) |

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
| POST | `/echo` | odsyła treść żądania | JSON |
| GET | `/blad` | celowy błąd |

## Middleware

| Middleware | Działanie |
|---|---|
| `logger` | loguje każde żądanie (godzina, metoda, adres), dodaje `req.czasZadania` |
| `express.json` | czyta treść żądania w formacie JSON do `req.body` |
| `express.urlencoded` | czyta treść żądania z formularza do `req.body` |
| `express.static` | wysyła pliki z katalogu `public` |

## Obsługa błędów

| Sytuacja | Kod | Odpowiedź |
|---|---|---|
| nie ma gry o podanym numerze | 404 | `{"blad":"Nie ma gry o takim numerze"}` |
| nieznany adres zaczynający się od `/gry`, `/szukaj` lub `/statystyki` | 404 | `{"blad":"Nie ma takiej trasy"}` |
| inny nieznany adres | 404 | strona HTML „404 — nie ma takiej strony" |
| błąd w kodzie trasy | 500 | `{"blad":"Błąd serwera"}`, szczegóły tylko w terminalu serwera |

## Przykład

```
GET /gry/6
{"id":6,"nazwa":"Patchwork","wydawca":"Lacerta","cena":99,"gracze":2}

GET /gry/999
404
{"blad":"Nie ma gry o takim numerze"}
```

## Autor

Jakub Czapnik klasa 4p1t
