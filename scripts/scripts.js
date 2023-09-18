var pisteet = 0;
var kaupanPisteet = 0;
var autoclickerHinta = 20;
var autoclickerMaara = 0;
var autoclickerInterval;
var voittoHinta = 10000;
var voittoSaavutettu = false;

function kasvataPisteita() {
    pisteet += (1 + autoclickerMaara);
    document.getElementById("pisteet").textContent = pisteet;

    if (pisteet >= voittoHinta && !voittoSaavutettu) {
        document.getElementById("voitto-ilmoitus").textContent = "Onneksi olkoon! Voitit pelin!";
        voittoSaavutettu = true;
    }
}

function ostaAutoclicker() {
    if (pisteet >= autoclickerHinta) {
        pisteet -= autoclickerHinta;
        autoclickerHinta += 10;
        autoclickerMaara++;
        document.getElementById("pisteet").textContent = pisteet;
        document.getElementById("autoclicker").textContent = autoclickerMaara;
        document.getElementById("autoclickerHinta").textContent = autoclickerHinta;
        updateAutoclickerInterval();
    } else {
        alert("Ei ole tarpeeksi pisteitä autoclickerin ostamiseen.");
    }
}

function ostaVoitto() {
    if (pisteet >= voittoHinta && !voittoSaavutettu) {
        pisteet -= voittoHinta;
        document.getElementById("pisteet").textContent = pisteet;
        voittoSaavutettu = true;
        alert("Onneksi olkoon! Voitit pelin!");
    } else if (voittoSaavutettu) {
        alert("Voitto on jo saavutettu.");
    } else {
        alert("Ei ole tarpeeksi pisteitä voiton ostamiseen.");
    }
}

function updateAutoclickerInterval() {
    clearInterval(autoclickerInterval);
    autoclickerInterval = setInterval(function () {
        kasvataPisteita();
    }, 1000);
}

function alustaPeli() {
    pisteet = 0;
    kaupanPisteet = 0;
    autoclickerHinta = 20;
    autoclickerMaara = 0;
    clearInterval(autoclickerInterval);
    document.getElementById("pisteet").textContent = pisteet;
    document.getElementById("autoclicker").textContent = autoclickerMaara;
    document.getElementById("autoclickerHinta").textContent = autoclickerHinta;
    voittoSaavutettu = false;
    document.getElementById("voitto-ilmoitus").textContent = "";
}
