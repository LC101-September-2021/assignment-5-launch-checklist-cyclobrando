// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    document.querySelector("div[id=missionTarget]").innerHTML=
    `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${image}">`;
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === "") {
       return "Empty"
   } else if (isNaN(testInput)) {
       return "Not a Number"
   } else return "Is a Number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let launchStatus = document.querySelector("h2[id=launchStatus]")
   let pilotStatus = document.querySelector("li[id=pilotStatus]");
   let copilotStatus = document.querySelector("li[id=copilotStatus]");
   let fuelStatus = document.querySelector("li[id=fuelStatus]");
   let cargoStatus = document.querySelector("li[id=cargoStatus]");
   
    if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is a Number" || 
        validateInput(copilot) === "Empty" || validateInput(copilot) === "Is a Number" ||
        validateInput(fuelLevel) === "Empty" || validateInput(fuelLevel) === "Not a Number" ||
        validateInput(cargoLevel) === "Empty" || validateInput(cargoLevel) === "Not a Number"){
        alert("Make sure to enter valid information in each field!")
    } else {list.style.visibility = "visible"};
   
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for Launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for Launch`;

    if (fuelLevel < 10000){
        fuelStatus.innerHTML = "Fuel level too low for launch";
    };
    
    if (fuelLevel === 10000 || fuelLevel > 10000) {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    };

    if (cargoLevel > 10000){
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    };
    
    if (cargoLevel === 10000 || cargoLevel < 10000){
        cargoStatus.innerHTML = "Cargo mass low enough for launch";  
    };
    
    if (fuelLevel < 10000 || cargoLevel > 10000){
        launchStatus.innerHTML = "Shuttle not ready to launch";
        launchStatus.style.color = "red";
    } else {
        launchStatus.innerHTML = "Shuttle ready to launch";
        launchStatus.style.color = "green";
    };
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        }); 

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetVar = planets.length;
    let number = Math.floor(Math.random()*planetVar);
    return planets[number];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
