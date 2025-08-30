import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreaSpesa() {
    const navigate = useNavigate(); // Hook per la navigazione
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    // ..altri stati per altri campi

    const handleSubmit = (event) => {
        event.preventDefault(); //riga importantissima perché impedisce il comportamento di un form HTML (quello di ricaricare la pagina quando viene inviato)
        const nuovaSpesa = { latConsegna: parseFloat(lat), lonConsegna: parseFloat(lon), articoli: ['latte', 'pane'] };

        fetch('http://localhost:8080/api/spese', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(nuovaSpesa)
        })
        .then(response => response.json())
        .then(() => {
            navigate('/spese'); //reindirizza l'utente alla lista delle spese
        })
        .catch(error => console.error('Errore nella creazione della spesa:', error));
    };

    return(
        <form onSubmit={handleSubmit}>
            {/* Campi del form per lat, lon, etc. */}
            <button type="submit">Crea Spesa</button>
        </form>
    );
}

export default CreaSpesa;