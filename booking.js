//booking
// variables that temporarily store the repeating ride info
let tempDate;
let tempTime;
let tempRepeat;
let tempPU;
let tempDO;

const scheduleButtonHandler = () =>{
  // initializes temporary variables
  tempDate = document.getElementById("dateInput").value;
  tempTime = document.getElementById("timeInput").value;
  tempRepeat = document.getElementById("repeatTypeDropdown").value;
  tempPU = document.getElementById("puLocationInput").value;
  tempDO = document.getElementById("doLocationInput").value;

  // checks that all the variables are not empty and that the start and end locations are different
  if (tempDate == "") {
    alert("Please select a starting date.");
  }
  if (tempTime == "") {
    alert("Please select a starting time.");
  }
  if (tempPU == "") {
    alert("Please enter the address where you would like to be picked up.");
  }
  if (tempDO == "") {
    alert("Please enter the address where you would like to be dropped off.");
  }
  if (tempPU == tempDO) {
    alert("Your starting and ending locations are the same. Please select different locations.");
  }

  // if all the above statements are false, then the repeating ride info is stored and user is redirectred to Home Page
  if (!(tempDate == "") && !(tempTime == "") && !(tempPU == "") && !(tempDO == "") && !(tempPU == tempDO)) {
    scheduled = `${tempDate} at ${tempTime} -- ${tempPU} to ${tempDO}`;
  
    if(scheduleArr != null){ // if the scheduleArray is not empty
    localStorage.setItem("localSchedule", (scheduleArr + "\n" + scheduled));
    } else { // if the scheduleArray is empty
      localStorage.setItem("localSchedule", scheduled);
    }
    // sets the location to the Home Page
    location.href = "home.html";
  }
}

// makes the submitBtn work
const scheduleButton = document.getElementById("submitBtn");
scheduleButton.addEventListener("click", scheduleButtonHandler);