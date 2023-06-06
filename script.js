const button = document.getElementById("button")
const ip = document.getElementById("ip")

button.addEventListener("click", () => {
  fetch("https://api.ipify.org?format=json")
  .then(data => data.json())
  .then(info => ip.innerText = `Your public ip is ${info.ip}`)
  
})