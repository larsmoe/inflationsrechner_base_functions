var weightMapping = [
        //official weights
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

var officialWeights = weightMapping.map(function(value,index) { return value[1]; });

var personalWeights = [98.85, 14.96, 31.77, 190.32, 30.77, 12.54, 26.92, 68.7, 41.56,
    13.69, 25.41, 28.62, 45.34, 27.22, 19.98, 22.88, 40.13, 26.81, 233.53];

var VPIs = [98.85, 14.96, 31.77, 190.32, 30.77, 12.54, 26.92, 68.7, 41.56,
    13.69, 25.41, 28.62, 45.34, 27.22, 19.98, 22.88, 40.13, 26.81, 233.53];

var VPIallgemein = 7.6;

function myFunction() {
    // document.getElementById('demo').innerHTML = Date()
    document.getElementById('offizielleGewichte').innerHTML = officialWeights;
    document.getElementById('persönlicheGewichte').innerHTML = personalWeights;
    document.getElementById('allgemeineInflationsrate').innerHTML = VPIallgemein;
    document.getElementById('Inflationsraten').innerHTML = VPIs;
};

function Faktor1(){
        faktor1 = [];
        for (let i = 0; i < officialWeights.length; i++) {
                faktor1[i] = (personalWeights[i]-officialWeights[i])/1000;
        };
        document.getElementById('EinflussGewichte').innerHTML = faktor1;
}
