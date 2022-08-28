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

// persönliche Gewichte des Warenkorbs (berechnet aus Eingaben des Nutzers)
var personalWeights = [98.85, 14.96, 31.77, 190.32, 30.77, 12.54, 26.92, 68.7, 41.56,
    13.69, 25.41, 28.62, 45.34, 27.22, 19.98, 22.88, 40.13, 26.81, 233.53];

// Inflationsraten der Güterkategorien
var VPIs = calcChange(csvData);

// amtliche Inflationsrate
var VPIamtlich = calcVPIamtlich(csvData, officialWeights);

// Inflationsraten der Güterkategorien berechnen ((VPI_heute(i)/VPI_vor1Jahr(i))-1)
function calcChange(data){
    var VPIs = [];
    // Spalte 0 und 1 sind Monat und allgemeiner VPI
    for(let i = 2; i < data[0].length; i++){
        VPIs[i-2] = ((data[data.length-1][i]/data[data.length-13][i])-1).toFixed(4);
    };
    return(VPIs);
};

// amtliche Inflationsrate berechnen (aus Gewichten und VPIs)
function calcVPIamtlich(data, weight){
    console.log(weight);
    console.log(data[data.length-1]);
    console.log(data[data.length-13]);
    var VPIsumAkt = 0;
    var VPIsumAlt = 0;
    for(let i = 2; i < data[0].length; i++){
        VPIsumAkt = VPIsumAkt + (data[data.length-1][i]*weight[i-2]);
        VPIsumAlt = VPIsumAlt + (data[data.length-13][i]*weight[i-2]);
    }
    VPIamtlich = (VPIsumAkt/VPIsumAlt)-1;
    return((VPIamtlich).toFixed(4));
};

// Werte anzeigen
function myFunction() {
    // document.getElementById('demo').innerHTML = Date()
    document.getElementById('offizielleGewichte').innerHTML = officialWeights;
    document.getElementById('persönlicheGewichte').innerHTML = personalWeights;
    document.getElementById('allgemeineInflationsrate').innerHTML = VPIamtlich;
    document.getElementById('Inflationsraten').innerHTML = VPIs;
};

// Erklärkomponente berechnen
function Erklaerkomponenten(){
        faktor1 = [];
        faktor2 = [];
        gesamtEinfluss = [];
        for (let i = 0; i < officialWeights.length; i++) {
                faktor1[i] = ((personalWeights[i]-officialWeights[i])).toFixed(4);
                faktor2[i] = (VPIs[i]-VPIamtlich).toFixed(4);
                gesamtEinfluss[i] = (faktor1[i]*faktor2[i]).toFixed(4);
        };
        document.getElementById('EinflussGewichte').innerHTML = faktor1;
        document.getElementById('EinflussInflation').innerHTML = faktor2;
        document.getElementById('EinflussGesamt').innerHTML = gesamtEinfluss;
}

