# Troubleshooting

## Il programma non si avvia

### Possibile causa
Python non è installato correttamente.

### Soluzione
Verificare la versione di Python:

python --version

## Le dipendenze non si installano

### Possibile causa
Il file `requirements.txt` non esiste o è vuoto.

### Soluzione
Verificare che il file esista:

cat requirements.txt

Poi installare:

pip install -r requirements.txt

## Il database non funziona

### Possibile causa
Il file `database.py` ha un errore di configurazione.

### Soluzione
Controllare il file `secret.json` e verificare le credenziali.
