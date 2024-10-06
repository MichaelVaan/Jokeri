'use strict';

let rowCount = 0;

document.getElementById('new-row').addEventListener('click', () => {
    const table = document.getElementById('joker-table');

    // Luo uusi rivi
    const newRow = table.insertRow();
    
    // Arvotaan 7 satunnaislukua ja lisätään ne taulukon soluihin
    for (let i = 0; i < 7; i++) {
        const newCell = newRow.insertCell();
        const randomNum = Math.floor(Math.random() * 10);  // Arpoo luvun välillä 0-9
        newCell.textContent = randomNum;
    }

    // Päivitä rivien lukumäärä
    rowCount++;
    document.getElementById('row-count').textContent = rowCount;
});
