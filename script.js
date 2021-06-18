// Write your JavaScript code here!
// window.addEventListener("formSubmit", function(event) {
//    event.preventDefault()
// });

window.addEventListener("load", function() {
   // TODO: put fetch calls here later
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let randomMissionIndex = Math.floor(Math.random() * json.length);
         document.getElementById("missionTarget").innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[randomMissionIndex].name}</li>
               <li>Diameter: ${json[randomMissionIndex].diameter}</li>
               <li>Star: ${json[randomMissionIndex].star}</li>
               <li>Distance from Earth: ${json[randomMissionIndex].distance}</li>
               <li>Number of Moons: ${json[randomMissionIndex].moons}</li>
            </ol>
            <img src="${json[randomMissionIndex].image}"></img>
            `
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name = pilotName");
      let copilotName = document.querySelector("input[name = copilotName");
      let fuelLevel = document.querySelector("input[name = fuelLevel");
      let cargoMass = document.querySelector("input[name = cargoMass");
      if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false) {
         alert("Pilot and Copilot names must made up of a string of letters.");
         return;
      } else if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
         alert("Fuel level and cargo mass must be numbers.");
         return;
      }
      else if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required for submission.");
         return;
      } 
      document.getElementById("pilotStatus").innerHTML = `Pilot, ${pilotName.value}, is ready`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot, ${copilotName.value}, is ready`;
      if (fuelLevel.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel to launch.";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
      } else if (cargoMass.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = "There is too much mass to launch.";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
      } else {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
         document.getElementById("launchStatus").style.color = "green";

      }
   });

   
   // pilotName.addEventListener("formSubmit", function(event) {
   //    alert("Must enter a pilot name.")
   // });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
