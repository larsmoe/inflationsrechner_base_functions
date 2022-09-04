// Güterkategorien mit den offiziellen Gewichten im Warenkorb (geg. von Destatis)
var weightMapping = [
        ["CC13-01",96.85,"Nahrungsmittel"],
        ["CC13-021",16.96,"Alkohol"],
        ["CC13-1111",31.77,"Restaurants & Cafés"],
        ["CC13-0411",196.32,"Nettokaltmiete"],
        ["CC13-0452",24.77,"Gas"],
        ["CC13-0453",11.54,"Heizöl"],
        ["CC13-0451",25.92,"Strom"],
        ["CC13-072",70.7,"Kraftstoffe"],
        ["CC13-0711",31.56,"Autokauf"],
        ["CC13-073",23.69,"Öffentl. Verkehrsmittel"],
        ["Freizeit",27.41,"Freizeit & Kultur"],
        ["CC13-096",26.62,"Pauschalreisen"],
        ["CC13-03",45.34,"Bekleidung"],
        ["CC13-083",22.22,"Telekommunikation"],
        ["Elektro",24.98,"Elektrogeräte"],
        ["CC13-121",22.88,"Körperpflege"],
        ["CC13-06",46.13,"Gesundheit"],
        ["CC13-022",20.81,"Tabakwaren"],
        ["REST",233.53,"Rest"]
    ];

// Array mit offiziellen Gewichten der Güterkategorien
var officialWeights = weightMapping.map(function(value,index) { return value[1]; });

// Datensatz mit VPI (amtlich und pro Güterkategorien) der vergangenen Monate (geg. von Destatis)
var csvData = [
    ["Monat", "VPI", "CC13-01", "CC13-021", "CC13-1111", "CC13-0411", "CC13-0452", "CC13-0453", "CC13-0451", "CC13-072", "CC13-0711", "CC13-073", "Freizeit", "CC13-096", "CC13-03", "CC13-083", "Elektro", "CC13-121", "CC13-06", "CC13-022", "REST"],
    [77, 108.7, 113.2, 104.8, 114, 108.4, 99.4, 96.6, 111.1, 113.2, 111.5, 107.7, 107, 104, 104.6, 95, 89.8, 109.1, 105.8, 126.7, 110],
    [78, 109.1, 113, 104.9 ,115.7, 108.5, 99.4, 98.9, 111.2, 114.4, 112, 108, 107.9, 109.2, 105.1, 94.9, 89.8, 109.4, 105.7, 127, 110.2],
    [79, 110.1, 113.3, 105.2, 116, 108.6, 99.8, 101.2, 111.1, 116.8, 112.6, 109.9, 108.1, 133.3, 102.6, 94.9, 90.2, 109.5, 105.8, 126.9, 110.6],
    [80, 110.1, 113.3, 105.3, 116.3, 108.7, 100.2, 100.2, 111.3, 117.6, 113, 110.2, 108.7, 129.5, 101.6, 94.8, 90.5, 109.7, 105.9, 126.9, 110.8],
    [81, 110.1, 113.3, 105.2, 116.6, 108.8, 100.7, 103.7, 111.5, 117.1, 114, 108.8, 109.5, 117.6, 105.5, 94.8, 90.7, 110.1, 106.1, 127.1, 111],
    [82, 110.7, 113.3, 105.3, 117.1, 109, 102.2, 117.3, 112, 121, 114.9, 109, 109.4, 112.1, 105.9, 94.7, 91.4, 110.3, 105.8, 127.7, 111.4],
    [83, 110.5, 113.9, 105, 117.4, 109.1, 103.5, 119.8, 112.6, 123.3, 115.7, 108.5, 110.2, 87.9, 106.4, 94.6, 91.3, 110.6, 105.9, 127.2, 111.7],
    [84, 111.1, 114.9, 105.2, 117.7, 109.2, 105.1, 115.4, 113, 121.2, 116.4, 109.5, 110.1, 109.5, 105.4, 94.5, 92, 110.7, 106, 127.5, 111.9],
    [85, 111.5, 116.7, 105.7, 118.5, 109.4, 118.7, 122.1, 123.2, 123.5, 117.3, 109, 110, 82, 100.9, 94.4, 92.5, 111.1, 106.2, 128.8, 112.6],
    [86, 112.5, 117.8, 105.6, 119.2, 109.6, 121.8, 129.2, 125.4, 126, 118.8, 109.5, 110, 89.7, 101.2, 94.3, 92.6, 111.5, 106.3, 130.1, 113.2],
    [87, 115.3, 118.8, 105.6, 120, 109.8, 128.2, 197.7, 130.7, 141.6, 120.3, 109.4, 110.4, 93, 105.8, 94.2, 92.9, 112.4, 106.7, 131.2, 113.4],
    [88, 116.2, 122.7, 107.4, 121, 109.9, 133, 166.9, 132.4, 137.8, 121.3, 111.8, 110.8, 109.4, 107.1, 94.1, 93.3, 113.3, 106.6, 131.5, 114.4],
    [89, 117.3, 125.3, 108.2, 122.2, 110.2, 138.3, 171.2, 135, 140.3, 121.8, 111.9, 111.2, 109.4, 107.9, 94.1, 94.3, 114.4, 107, 132.1, 115.2],
    [90, 117.4, 126.5, 109.7, 124, 110.3, 142.1, 187, 135.7, 137.5, 122.1, 76.1, 111.6, 127.4, 106.3, 94, 94.6, 115.3, 107.2, 132.8, 115.8]
];

var gesamtAusgaben = 1650;
// persönliche Gewichte des Warenkorbs (berechnet aus Eingaben des Nutzers)
// persönliche Inflationsrate ist größer als amtliche
 var personalWeights = [98.85, 14.96, 31.77, 190.32, 30.77, 12.54, 26.92, 68.7, 41.56,
    13.69, 25.41, 28.62, 45.34, 27.22, 19.98, 22.88, 40.13, 26.81, 233.53];
// persönliche Inflationsrate ist niedriger als amtliche
// var personalWeights = [0.85, 300.96, 30.77, 150.32, 20.77, 12.54, 23.92, 68.7, 41.56,
//    13.69, 25.41, 28.62, 30.34, 27.22, 19.98, 22.88, 20.13, 18.81, 233.53];

var ausgaben = [];
for(let i = 0; i < personalWeights.length; i++){
    ausgaben[i] = ((personalWeights[i]/1000)*gesamtAusgaben).toFixed(0);
}

// persönliche Gewichte sind gleich der amtlichen
// var personalWeights = officialWeights;

// Inflationsraten der Güterkategorien
var VPIs = calcChange(csvData);

// amtliche Inflationsrate
var VPIamtlich = calcVPI(csvData, officialWeights);

// persönliche Inflationsrate
var VPIpersoenlich = calcVPI(csvData, personalWeights);

// Array mit Einflüssen
var Einfluss = Erklaerkomponenten().map(Number);

// Array mit Index der jeweils 2 stärksten positiven und negativen Einflüssen
var highestImpact= getInfluencingCategories(Einfluss);

// Erklärtext generieren
const erklaertext = ErklaertexteGenerieren(VPIamtlich, VPIpersoenlich, highestImpact);
console.log(erklaertext);
// Inflationsraten der Güterkategorien berechnen ((VPI_heute(i)/VPI_vor1Jahr(i))-1)
function calcChange(data){
    var VPIs = [];
    // Spalte 0 und 1 sind Monat und allgemeiner VPI
    for(let i = 2; i < data[0].length; i++){
        VPIs[i-2] = (((data[data.length-1][i]/data[data.length-13][i])-1)*100).toFixed(1);
    };
    return(VPIs);
};

// Inflationsrate berechnen (aus Gewichten und VPIs)
function calcVPI(data, weight){
    var VPIsumAkt = 0;
    var VPIsumAlt = 0;
    for(let i = 2; i < data[0].length; i++){
        VPIsumAkt = VPIsumAkt + (data[data.length-1][i]*weight[i-2]);
        VPIsumAlt = VPIsumAlt + (data[data.length-13][i]*weight[i-2]);
    }
    VPI = (VPIsumAkt/VPIsumAlt)-1;
    return((VPI*100).toFixed(1));
};

// Kategorien mit den 2 stärksten positiven und negativen Einflüssen
function getInfluencingCategories(array){
    var positiveImpact = [];
    var negativeImpact = [];
    var temparray = array;

    // i < 2 -> nur jeweils 2 Kategorien
    for(let i = 0; i < 2; i++){
        // Index der Kategorie mit dem größten positiven Einfluss
        positiveImpact[i] = array.indexOf(Math.max.apply(null, temparray));
        // Index der Kategorie mit dem größten negativen Einfluss
        negativeImpact[i] = array.indexOf(Math.min.apply(null, temparray));
        // Extremwerte im Array auf 0 setzen
        temparray[array.indexOf(Math.max.apply(null, temparray))] = 0;
        temparray[array.indexOf(Math.min.apply(null, temparray))] = 0;
        };
    return[positiveImpact, negativeImpact];
};

// Generierung der Erklärtexte
function ErklaertexteGenerieren(amtlInfl, persInfl, impact){
    var textbausteine = [];
    if (amtlInfl > persInfl) {
        textbausteine[0] = 'niedriger als die';
        textbausteine[1] = impact[1][0];
        textbausteine[2] = impact[1][1];
        textbausteine[3] = impact[0][0];
        textbausteine[4] = 'unten';
        textbausteine[5] = 'oben';
    } else if(amtlInfl < persInfl) {
        textbausteine[0] = 'groesser als die';
        textbausteine[1] = impact[0][0];
        textbausteine[2] = impact[0][1];
        textbausteine[3] = impact[1][0];
        textbausteine[4] = 'oben';
        textbausteine[5] = 'unten';
    } else {
        textbausteine[0] = 'gleich der';
        textbausteine[1] = impact[1][0];
        textbausteine[2] = impact[1][1];
        textbausteine[3] = impact[0][0];
    }
    const text = 'Ihre persoenliche Inflationsrate ist ' + textbausteine[0] + ' vom Statistischen Bundesamt ausgewiesene Inflationsrate. Insbesondere Ihre Ausgaben fuer '+ weightMapping[textbausteine[1]][2] + ', '+ weightMapping[textbausteine[2]][2]+ ' und '+ weightMapping[textbausteine[3]][2]+ ' fuehren zu Abweichungen.';
    const text2 = 'Insbesondere Ihre Ausgaben fuer '+weightMapping[textbausteine[1]][2] + ' und '+weightMapping[textbausteine[2]][2] + ' fuehren zu Abweichungen nach '+textbausteine[4] + '. Zu Abweichungen nach '+textbausteine[5] + ' fuehren Ihre Ausgaben fuer '+weightMapping[textbausteine[3]][2] + '.';
    return([text, text2, textbausteine[1], textbausteine[2], textbausteine[3]]);
};

// Erklärkomponente berechnen
function Erklaerkomponenten(){
        faktor1 = [];
        faktor2 = [];
        gesamtEinfluss = [];
        for (let i = 0; i < officialWeights.length; i++) {
                faktor1[i] = personalWeights[i]-officialWeights[i];
                faktor2[i] = VPIs[i]-VPIamtlich;
                gesamtEinfluss[i] = (faktor1[i]*faktor2[i]).toFixed(1);
        };
        return(gesamtEinfluss);
};

// Werte anzeigen
function myFunction() {
    // document.getElementById('demo').innerHTML = Date()
    document.getElementById('offizielleGewichte').innerHTML = officialWeights;
    document.getElementById('persönlicheGewichte').innerHTML = personalWeights;
    document.getElementById('allgemeineInflationsrate').innerHTML = VPIamtlich;
    document.getElementById('persoenlicheInflationsrate').innerHTML = VPIpersoenlich;
    document.getElementById('Inflationsraten').innerHTML = VPIs;
};

function myfunction2(){
    document.getElementById('EinflussGesamt').innerHTML = gesamtEinfluss;
    document.getElementById('posImpact').innerHTML = highestImpact[0];
    document.getElementById('negImpact').innerHTML = highestImpact[1];
    document.getElementById('text').innerHTML = erklaertext[0];
    document.getElementById('text2').innerHTML = erklaertext[1];
    document.getElementById("adj-cat-1").innerHTML = weightMapping[erklaertext[2]][2];
    document.getElementById("adj-cat-2").innerHTML = weightMapping[erklaertext[3]][2];
    document.getElementById("adj-cat-3").innerHTML = weightMapping[erklaertext[4]][2];
    document.getElementById("adj-input-1").value = ausgaben[erklaertext[2]];
    document.getElementById("adj-input-2").value = ausgaben[erklaertext[3]];
    document.getElementById("adj-input-3").value = ausgaben[erklaertext[4]];
};

function myfunction3(){
    ausgaben[erklaertext[2]] = document.getElementById("adj-input-1").value;
    ausgaben[erklaertext[3]] = document.getElementById("adj-input-2").value;
    ausgaben[erklaertext[4]] = document.getElementById("adj-input-3").value;
    console.log(ausgaben);
    newWeights = [];
    newGesamtAusgaben = 0;
    newPersonalWeightSum = 0;
    for(let i = 0; i < ausgaben.length; i++){
        newGesamtAusgaben = newGesamtAusgaben + parseInt(ausgaben[i]);
        newPersonalWeightSum = newPersonalWeightSum + parseInt(personalWeights[i]);
    };
    // console.log(newGesamtAusgaben);
    // console.log(newPersonalWeightSum);
    for(let i = 0; i < ausgaben.length; i++){
        newWeights[i] = (ausgaben[i]/newGesamtAusgaben)*1000;
    };
    // console.log(newWeights);
    var newVPIpersoenlich = calcVPI(csvData, newWeights);

    document.getElementById('persoenlicheInflationsrate').innerHTML = newVPIpersoenlich;
}

var adj_btn_inc_dec = 10;
var incButtons = document.getElementsByClassName('inc-adj-btn');
var decButtons = document.getElementsByClassName('dec-adj-btn');

 for (var i = 0; i < incButtons.length; i++) {
        var button = incButtons[i];
        button.addEventListener('click', function (event) {
            var buttonClicked = event.target;
            var input_field = buttonClicked.parentElement.children[1];
            var inputValue = input_field.value;
            var newValue = parseInt(inputValue) + adj_btn_inc_dec;
            if (isNaN(parseInt(inputValue))) {
                alert('Bitte geben Sie eine Nummer ein')
                input_field.value = 0;
            } else{
              input_field.value = newValue;
            }

        });
    }

    for (var i = 0; i < decButtons.length; i++) {
        var button = decButtons[i];
        button.addEventListener('click', function (event) {
            var buttonClicked = event.target;
            var input_field = buttonClicked.parentElement.children[1];
            var inputValue = input_field.value;
            var newValue = parseInt(inputValue) - adj_btn_inc_dec;
            if (isNaN(parseInt(inputValue))) {
                input_field.value = 0;
            } else {
                if (newValue >= 0) {
                    input_field.value = newValue;
                }
                else {
                input_field.value = 0;
                }

            }

        });
    }



