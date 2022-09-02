console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
       getImages()
       getBreeds()
})


function getImages() {
    let div = document.getElementById("dog-image-container")
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(data => {
        console.log(data.message)
        data.message.forEach(imageURL => {
            let img = document.createElement("img")
            img.src = imageURL 
            div.appendChild(img);
        })
    })
}

function getBreeds() {
    let ul = document.getElementById("dog-breeds")
    ul.addEventListener("click", styleLi)
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => {
        console.log(Object.keys(data.message))
        Object.keys(data.message).forEach(breed => {
            let li = document.createElement("li")
            li.innerText = breed
            ul.appendChild(li);            
        })
    })
}

