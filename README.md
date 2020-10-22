# Crossword digitale per il Cassinista 
Versione ottimizzata de [jweisbeck/Crossword](https://github.com/jweisbeck/Crossword) per la versione digitale della sezione Playtime del Cassinista 🧩

## Secreenshots 👀
### Versione chiara ☀️
![Screenshot della verione chiara](https://i.imgur.com/qJoFM5r.png)

### Versione scura 🌑
La dark mode si attiva automaticamente con l'aggiunta della classe `dark` a  `<html>` da parte dello script  `js/script.js`

![Screenshot della verione scura](https://i.imgur.com/D08GigW.png)

Per il funzionamento del plugin è necessario includere JQuery e i fogli di stile:
```html
<!-- Foglio di stile -->
<link rel="stylesheet" href="css/main.css"/>

<!-- Import di JQuery del plugin e dello script -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"></script>
<script src="js/jquery.crossword.js"></script>
<script src="js/script.js"></script>
```
## Uso 📖
Per installare ed utilizzare il cruciverba è necessario seguire i seguenti passaggi:
### Guida Semplice 👶
* Scarica [questo archivio `.zip`](https://github.com/rospino74/Crossword/releases/latest)
* Modifica puzzleData.json secondo [questo schema](https://github.com/rospino74/Crossword#schema-puzzledata.json)
### Guida Avanzata 👩‍💻
* Clona il repository o scarica [questo archivio `.zip`](https://github.com/rospino74/Crossword/releases/latest)
* Modifica i file come preferisci, ricordandoti di ricompilare i file [`.scss`](https://github.com/rospino74/Crossword/search?l=scss)!
* Modifica `puzzleData.json` secondo [questo schema](https://github.com/rospino74/Crossword#schema-puzzledata.json)
* Aggiungi il seguente pezzo di codice dove vuoi che il cruciverba compaia:
 ```html
 <div class="puzzle-container">
		<!-- Qua appariranno sia i clues che il cruciverba-->
 </div>
<!-- Foglio di stile per il cruciverba -->
<link rel="stylesheet" href="css/main.css"/>

<!-- Import di JQuery del plugin e dello script -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"></script>
<script src="js/jquery.crossword.js"></script>
<script src="js/script.js"></script>
 ```
### Schema puzzleData.json
#### Tabella delle chiavi
| Chiave | Tipo | Valore |
| :--- | :---: | :---|
|*clue*|`string`|Indizio|
|*answer*|`string`|Risposta|
|*position*|`int`|Numero della riga|
|*orientation*|`string`|Disposizione della riga. Può essere solo `across` o `down`|
|*startx*|`int`|Posizione di partenza orizzontale|
|*starty*|`int`|Posizione di partenza verticale|

#### Esempio di file
```json
[
    {
       "clue": "Prima lettera dell'alfabeto greco",
       "answer": "alpha",
       "position": 2,
       "orientation": "across",
       "startx": 1,
       "starty": 3
   },
   {
    "clue": "L'orologio segna l'____",
    "answer": "ora",
    "position": 1,
    "orientation": "down",
    "startx": 5,
    "starty": 1
    }
]
```
