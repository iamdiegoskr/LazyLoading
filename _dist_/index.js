import { registerImage, imagesLoaded } from './lazy.js'

const imgTopics = ["animals", "nature", "tecnology", "people", "food", "vacations", "sea", "cars", "motorcycles", "sports", "anime", "music", "art", "tattos", "architecture", "movies"]

const sectionImages = document.querySelector('.section-images')
const buttonAddImage = document.querySelector('.btn-add-image')
const buttonClearImages = document.querySelector('.btn-remove-images')

let imagesAdded = 0


const createImgNode = () => {

    const container = document.createElement('div')
    container.className = "image"

    const imageHTML = document.createElement('img')
    imageHTML.dataset.src = `https://source.unsplash.com/random?${getRandomTopic(imgTopics)}`

    const preloader = document.createElement('div')
    preloader.className = "preloader"

    // container.appendChild(imageHTML)

    container.append(imageHTML, preloader)

    return container
}

function getRandomTopic(topics) {
    const numberRandom = Math.floor(Math.random() * topics.length)
    return topics[numberRandom]
}

const renderImage = (event) => {
    const imageContainer = createImgNode()
    sectionImages.append(imageContainer)
    imagesAdded++

    registerImage(imageContainer)

    printInfo()

}

function clearImages() {
    // sectionImages.innerHTML = "" opcion1

    // console.log([...sectionImages.childNodes])

    const images = [...sectionImages.childNodes]

    images.forEach(image => {
        image.remove()
    })


}

export function printInfo() {
    console.log("Imagenes agregadas : " + imagesAdded)
    console.log("Imagenes cargadas : " + imagesLoaded)
    console.log("-----------------------------------")
}

const firstImage = createImgNode()
sectionImages.append(firstImage)
imagesAdded++
registerImage(firstImage)

buttonAddImage.addEventListener('click', renderImage)

buttonClearImages.addEventListener('click', clearImages)