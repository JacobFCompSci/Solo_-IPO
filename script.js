// APPLE VS ANDROID VOTE

// LISTENER

document.getElementById("android").addEventListener("click", androidVote);

// ANDROID OUTPUT

function androidVote() {
  document.getElementById("versus").src = "images/androidLogo.jpg";
  document.getElementById("linkdebate").style.backgroundColor = "#a4c93b";
  document.getElementById("linkdebate").innerHTML = `Android Home`;
  document.getElementById("linkdebate").href = "https://www.android.com/";
  document.getElementById("html").style.background = "#a4c93b";
  document.getElementById("thebody").style.fontFamily = "Roboto,sans-serif";
  document.getElementById("android").classList.add("active");
  document.getElementById("apple").classList.remove("active");
}

// LISTENER

document.getElementById("apple").addEventListener("click", appleVote);

// APPLE OUTPUT

function appleVote() {
  document.getElementById("versus").src = "images/Apple-Logo.jpg";
  document.getElementById("linkdebate").innerHTML = `Apple Home`;
  document.getElementById("linkdebate").href = "https://www.apple.com/";
  document.getElementById("linkdebate").style.backgroundColor = "#b6bcca";
  document.getElementById("html").style.background = "#b6bcca";
  document.getElementById("thebody").style.fontFamily = "Brygada,1918,serif";
  document.getElementById("apple").classList.add("active");
  document.getElementById("android").classList.remove("active");
}
