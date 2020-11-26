'use strict';
    let mijnButton = document.getElementById('mijnButton');
    let optelAntwoord = document.getElementById('optellen');
    let vermenigvuldigAntwoord = document.getElementById('vermenigvuldigen');
    let deelAntwoord = document.getElementById('delen');
    let aftrekAntwoord = document.getElementById('aftrekken');
    mijnButton.addEventListener('click', function(){
        // lees de waarden van de text input velden in 
        // let op DIT ZIJN STRINGS
        let getal1 = document.getElementById('getal1').value;        
        let getal2 = document.getElementById('getal2').value;      
        // zet de ingelezen strings om in getallen
        getal1 = parseFloat(getal1);
        getal2 = parseFloat(getal2);
        // roep de function aan met arguments
        telOp(getal1,getal2);
        vermenigvuldig(getal1,getal2);
        aftrekken(getal1,getal2);
        delen(getal1,getal2);
    })
    function telOp(getal1, getal2){
        let antwoord = getal1 + getal2;// doe de bewerking
        console.log("optellen " + antwoord); // laat ook in de console zien
        optelAntwoord.innerHTML = antwoord; // schrijf naar HTML
    }
    function vermenigvuldig(getal1, getal2){
        let antwoord = getal1 * getal2;// doe de bewerking
        console.log("vermenigvuldigen " + antwoord); // laat ook in de console zien
        vermenigvuldigAntwoord.innerHTML = antwoord; // schrijf naar HTML
    }
    function aftrekken(getal1, getal2){
        let antwoord = getal1 - getal2;// doe de bewerking
        console.log("aftrekken " + antwoord); // laat ook in de console zien
        aftrekAntwoord.innerHTML = antwoord; // schrijf naar HTML
    }
    function delen(getal1, getal2){
        let antwoord = getal1 / getal2;// doe de bewerking
        console.log("delen " + antwoord); // laat ook in de console zien
        deelAntwoord.innerHTML = antwoord;
        if (getal2 == 0)
        alert('This is not possible')
            }