function heure12hVers24h(heure12h) {
  var heures = parseInt(heure12h);
  var minutes = parseInt(heure12h.substring(heure12h.indexOf(":") + 1, heure12h.indexOf(":") + 3));
  var pm = heure12h.indexOf("PM") !== -1;
  
  if (heures === 12 && !pm) {
    heures = 0;
  }
  else if (pm && heures !== 12) {
    heures += 12;
  }
  
  return heures.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
}

console.log(heure12hVers24h("11:40PM")); 
console.log(heure12hVers24h("12:30AM")); 
console.log(heure12hVers24h("12:00PM"));
