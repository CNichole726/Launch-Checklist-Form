// Write your JavaScript code here!
window.addEventListener("formSubmit", function(event) {
   event.preventDefault()
});

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   // console.log('form', form);
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name = pilotName");
      let copilotName = document.querySelector("input[name = copilotName");
      let fuelLevel = document.querySelector("input[name = fuelLevel");
      let cargoMass = document.querySelector("input[name = cargoMass");
      if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false) {
         alert("Pilot and Copilot names must made up of a string of letters.");
      } else if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
         alert("Fuel level and cargo mass must be numbers.");
      }
      else if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required for submission.");
      } 
      document.getElementById("pilotStatus").innerHTML = `Pilot, ${pilotName}, is ready`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot, ${copilotName}, is ready`;
      if (fuelLevel.value < 10000){
         document.getElementById("fuelStatus").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel to launch.";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
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
