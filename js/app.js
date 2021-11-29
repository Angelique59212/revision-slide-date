let result =  document.getElementById("result");
let aujourdhui = new Date();

result.innerHTML =
    "jour de la semaine: " + aujourdhui.getDay() + "<br>" +
    "jour du mois: " + aujourdhui.getDate() + "<br>" +
    "mois en cours version JS " + aujourdhui.getMonth() + "<br>" +
    "mois en cours version humaine: " + (aujourdhui.getMonth() + 1) + "<br>" +
    "année au format 4 chiffres: " + aujourdhui.getFullYear() + "<br>" +
    "année au format 2 chiffres: " + aujourdhui.getFullYear().toString().slice(2) + "<br>" +
    "heure: " + aujourdhui.getHours() + "<br>" +
    "heure avec un zéro devant si besoin: " + aujourdhui.getHours().toString().padStart(2,0) + "<br>" +
    "minutes: " + aujourdhui.getMinutes() + "<br>" +
    "minutes avec un zéro devant si besoin: " + aujourdhui.getMinutes().toString().padStart(2,0) + "<br>" +
    "secondes: " + aujourdhui.getSeconds() + "<br>" +
    "millisecondes: " + aujourdhui.getMilliseconds()

aujourdhui.setDate(29);
aujourdhui.setMonth(10);
aujourdhui.setFullYear(2021);
aujourdhui.setHours(15);
aujourdhui.setMinutes(33);
aujourdhui.setSeconds(35);
aujourdhui.setMilliseconds(200);

result.innerHTML =
    "jour de la semaine: " + aujourdhui.getDay() + "<br>" +
    "jour du mois: " + aujourdhui.getDate() + "<br>" +
    "mois en cours version JS " + aujourdhui.getMonth() + "<br>" +
    "mois en cours version humaine: " + (aujourdhui.getMonth() + 1) + "<br>" +
    "année au format 4 chiffres: " + aujourdhui.getFullYear() + "<br>" +
    "année au format 2 chiffres: " + aujourdhui.getFullYear().toString().slice(2) + "<br>" +
    "heure: " + aujourdhui.getHours() + "<br>" +
    "heure avec un zéro devant si besoin: " + aujourdhui.getHours().toString().padStart(2,0) + "<br>" +
    "minutes: " + aujourdhui.getMinutes() + "<br>" +
    "minutes avec un zéro devant si besoin: " + aujourdhui.getMinutes().toString().padStart(2,0) + "<br>" +
    "secondes: " + aujourdhui.getSeconds() + "<br>" +
    "millisecondes: " + aujourdhui.getMilliseconds();

aujourdhui.setHours(20);
aujourdhui.setMinutes(61);

result.innerHTML =
"heure: " + aujourdhui.getHours() + "<br>" +
"minutes: " + aujourdhui.getMinutes();

//compare dates
let hier = new Date;
hier.setDate(aujourdhui.getDate() -1);

if (aujourdhui > hier) {
    result.innerHTML = "Aujourd'hui est bien plus grand qu'hier";
}

if (hier.getTime() !== aujourdhui.getTime()) {
    result.innerHtml += "Hier et aujourd'hui sont bien différents!"
}

//different time interval
hier.setDate(aujourdhui.getDate() -1);
let interval = aujourdhui.getTime() - hier.getTime();
let days = Math.floor(interval / 1000 / 60 / 60 / 24);
let hours = Math.floor(interval / 1000 / 60 / 60);
let minutes = Math.floor(interval / 1000 / 60);
let seconds = Math.floor(interval / 1000);

result.innerHtml = "Entre hier et aujourd'hui, il s'est passé: <br>";
result.innerHTML += days + "jours ou <br>";
result.innerHTML += hours + "heure ou <br>";
result.innerHTML += minutes + "minutes ou <br>";
result.innerHTML += seconds + "secondes ou <br>";

//convert a date and time local
result.innerHTML = aujourdhui.toLocaleDateString();
result.innerHTML = aujourdhui.toLocaleTimeString();
result.innerHTML = aujourdhui.toLocaleString();

