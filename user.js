//user
//sets specific text to show the provided name, email, and accommodations
document.getElementById("nameHeading").textContent = name;
document.getElementById("emailHeading").textContent = email;
document.getElementById("accommodationsInput").placeholder = accommodations;

//makes back button work and also save any accommodations provided
backBtnHandler = ()=>{
 localStorage.setItem("localAccommodations", document.getElementById("accommodationsInput").value)
 location.href = "home.html";
}
const userBackBtn = document.getElementById("userBackBtn");
userBackBtn.addEventListener("click", backBtnHandler);