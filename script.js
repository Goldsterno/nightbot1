// Variable zur Verfolgung der Anzahl der Umarmungen
var umarmungenZähler = 0;

// Funktion, die beim Aufrufen des Befehls ausgeführt wird
function hugCommand() {
    // Zufälligen Text für die Umarmung auswählen
    var umarmungsTexte = [" und erdrück ihn/sie fast", "ganz doll", " in den Tod"];
    var zufälligerUmarmungsText = umarmungsTexte[Math.floor(Math.random() * umarmungsTexte.length)];

    // Anzahl der Umarmungen erhöhen
    umarmungenZähler++;

    // Rückgabewert für Nightbot-Befehl
    return `$(user) umarmt @$(touser)${zufälligerUmarmungsText}. Team Kennypon wurde schon ${umarmungenZähler} Mal umarmt.`;
}

// Exportiere die Funktion für Nightbot
hugCommand;
