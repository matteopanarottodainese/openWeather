/////////////////////////////////////////////
// disabilitare - abilitare bottone form ////
/////////////////////////////////////////////

var campoInput = document.getElementById('cityName');
var buttonInput = document.getElementById('get');

campoInput.addEventListener('input', function () {
  if (campoInput.value.trim() !== '') {
      buttonInput.removeAttribute('disabled');
  } else {
      buttonInput.setAttribute('disabled', 'true');
  }
});


/////////////////////////////////////////////
// capitalizzare nome del mese //////////////
/////////////////////////////////////////////

// mese in parola
var options = { month: 'long' };
var currentMonthName = new Date().toLocaleString('it-IT', options);

// string capitalize
var monthCapitalized = currentMonthName[0].toUpperCase() + currentMonthName.slice(1);

// stringa
var date = new Date().getDate() + " " + monthCapitalized;
document.getElementById("currentYear").innerHTML = date;


/////////////////////////////////////////////
// capitalizzare weather description ////////
/////////////////////////////////////////////

var weatherParagraph = document.getElementById('weather-description');
var weatherText = weatherParagraph.innerText;
var weatherParagraphCapitalized = weatherText[0].toUpperCase() + weatherText.slice(1);
weatherParagraph.innerHTML = weatherParagraphCapitalized;