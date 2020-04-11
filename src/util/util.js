const util = {};

util.abililityModCalculator = (abilityScore) => {
    var initialValue = -5;
    for(var i=1; i<=abilityScore; i++) {
        if(i%2 === 0) {
            initialValue++;
        }
    }
    return initialValue;
}

util.lookup = {
    strength : "STR",
    dexterity: "DEX",
    constitution: "CON",
    intelligence: "INT",
    wisdom: "WIS",
    charisma: "CHA"
}

export default util;