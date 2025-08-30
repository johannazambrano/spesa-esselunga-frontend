import React, { useState, useEffect } from 'react';
// questo componente deve chiamare l'endpoint /api/spese per ottenere la lista di tutte le spese
// si usa un hook di react chiamato useEffect che serve a fare operazioni (come chiamate API) quando il comeponente viene caricato
function ListaSpese() {
    const [spese, setSpese] = useState([]);

    useEffect(() => {
        // Chiamata all'API del backend
        fetch('http://localhost:8080/api/spese')
            .then(response => response.json()) //converte la response in un json
            .then(data => {
                console.log("Risultato della fetch:", data);
            })
            .then(data => setSpese(data)) //con i dati convertiti in json questa parte li prende data e usa la funzione setSpese per aggiornare lo stato spese
            .catch(error => console.error('Errore nel recupero delle spese:', error));
    }, []); // L'array vuoto alla fine è cruciale, assicura che il codice venga eseguito solo una volta quando il componente appare per la prima volta

    return (
        <div>
            <h2>Lista delle Spese</h2>
            <ul>
                {spese.map(spesa => (
                    <li key={spesa.id}>{spesa.stato} - {spesa.dataCreazione}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListaSpese;