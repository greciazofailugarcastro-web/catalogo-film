# git commit

## Descrizione

Il comando `git commit` salva una versione del progetto con un messaggio descrittivo.

## Sintassi

git commit -m "messaggio del commit"

## Esempio

git commit -m "aggiunto README iniziale"

## Casi d'uso

| Situazione | Comando |
|---|---|
| Salvare il README | `git commit -m "aggiunto README"` |
| Salvare una correzione | `git commit -m "corretto errore login"` |

## Errore comune

Fare commit senza prima aggiungere i file con `git add`.

## Soluzione

Eseguire sempre prima:

git add .
git commit -m "messaggio"

## Blocco di codice completo

git status
git add .
git commit -m "messaggio del commit"
git push
