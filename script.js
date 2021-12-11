//import {formSubmission} from './scriptHelper.js';


window.addEventListener("load", function() {

    let form = document.querySelector("form");
    let list = document.querySelector("div[id=faultyItems]");
    

    form.addEventListener("submit", function(event) {
        
        let pilotNameInput = document.querySelector("input[name=pilotName]").value;
        let copilotNameInput = document.querySelector("input[name=copilotName]").value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
        let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
        
        // if (pilotNameInput === "" || copilotNameInput === "" || 
        // fuelLevelInput === "" || cargoMassInput === "") {
        // alert("All fields required!");
        // event.preventDefault();
        // }

        formSubmission(document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
        event.preventDefault();
        
   
            
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        let planetName = planet.name;
        let planetDiameter = planet.diameter;
        let planetStar = planet.star;
        let planetDistance = planet.distance;
        let planetMoons = planet.moons;
        let planetImageUrl = planet.image;
        addDestinationInfo(document, planetName, planetDiameter, planetStar, planetDistance, planetMoons, planetImageUrl)
    });

   
})