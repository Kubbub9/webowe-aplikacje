1. Tytuł i opis - Program do robienia listy zakupów. Można w nim dodać zadnie, oznaczyć jako zrbione oraz wyświetlic całą liste.

2. System i środowsko
- System operacyjny: Windows 11
- Środowisko programistyczne: Visual Studio Code
- Języki i technologie: JavaScript, Node.js 

3. Uruchomienie:
- nie trezba nic instalować
- uruchom w cmd jedno z poleceń

4. Struktura projektu:
| Plik | Zawartość |
|---|---|
| `app.js` | obsługuje komendy z terminala |
| `magazyn.js` | odczytuje i zapisuje pliki z danymi |
| `zadania.json` | dane |

5. Skrypty:
| Polecenie | Działanie |
|---|---|
| `npm run lista` | wypisuje listę |
| `npm run dodaj -- "tekst"` | dodaje nowe zadanie |
| `npm run zrobione -- numer` | oznacza zadanie o jako wykonane |

6. Przykład:
$ npm run dodaj -- "Zrobić śniadanie"
Dodano zadanie nr 1: Zrobić śniadanie

$ npm run dodaj -- "Kupić książkę"
Dodano zadanie nr 2: Kupić książkę

7. Autor
Jakub Czapnik 4p1t