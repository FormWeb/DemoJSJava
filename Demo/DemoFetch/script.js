const URLAgify = "https://api.agify.io?name=__name__"

const inputHTML = document.getElementById("name")
const buttonHTML = document.getElementById("button")
const ageHTML = document.querySelector("span")

buttonHTML.addEventListener("click", () => {
    const name = inputHTML.value 
    fetch(URLAgify.replace("__name__", name))
        .then(response => response.json())
        .then(data => {
            console.log("data récupéré")
            ageHTML.innerText = data.age
        })
        .catch(e => {
            console.log("Une erreur est survenue")
        })
    console.log("Bonjour")
})

