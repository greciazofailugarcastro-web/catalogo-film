# API e Dati

## File in uso

data.json

## Struttura dei dati

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| titolo | string | Nome del film |
| categoria | string | Genere del film |
| descrizione | string | Testo descrittivo |

## Esempio

```json
{
  "titolo": "Interstellar",
  "categoria": "Sci-fi",
  "descrizione": "Un viaggio spaziale attraverso un buco nero."
}
```

## Come vengono usati i dati

Il file data.json viene caricato
tramite fetch() in script.js.
I dati vengono visualizzati
come card nella sezione Catalogo Film.

## Script utilizzato

File: script.js
Funzione: fetch("data.json")
Destinazione: #film-lista