export let imagesLoaded = 0;
import { printInfo } from './index.js'

const HandlerObserverImage = (entries, observer) => {
    //entries.filter(entry => entry.isIntersecting), esto me devuelve un array con los elementos que estan siendo interceptados


    entries.filter(entry => entry.isIntersecting).forEach(entry => {

        // console.log(entry)

        const container = entry.target;
        // const image = container.querySelector('img')

        const image = container.firstChild;
        const urlImage = image.dataset.src;

        const preloader = container.lastChild;

        //Cargamos la imagen
        image.src = urlImage
        image.onload = function() {
            //detener el preloader y ocultarlo
            preloader.style.animation = "none"
            preloader.style.visibility = "hidden"
            container.style.opacity = 1
        }

        imagesLoaded++
        printInfo()


        // observer.disconnect()
        //Desregrista la imagen(unlisten), ya no se observara mas el nodo, pero le tenemos que decir cual
        observer.unobserve(container)
    });
}

const observer = new IntersectionObserver(HandlerObserverImage, {
    threshold: 0
})


export const registerImage = (imageContainer) => {
    //IntersectionObserver -> observe(img), el intersectionObserver observara a la imageContainern que estamos recibiendo
    observer.observe(imageContainer)
}