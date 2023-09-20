//home

//takes user to the user page
const SettingsButtonHandler = () => {
 location.href = "user.html";
}
const settingsButton = document.getElementById("settingsButton");
settingsButton.addEventListener("click", SettingsButtonHandler);

//takes user to the booking page
const HomeScheduleButtonHandler = () =>{
  location.href = "booking.html";
}
const homeScheduleButton = document.getElementById("homeScheduleBtn");
homeScheduleBtn.addEventListener("click", HomeScheduleButtonHandler);


// these following 2 lines set the greeting with the provided name and set the correct text to scheduledRides
document.getElementById("homeName").textContent = "Hi, " + name;
document.getElementById("scheduledRides").innerText = scheduleArr;
