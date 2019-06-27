import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
  let bgElem = document.querySelector("#bg-image")
  bgElem.setAttribute("background", _is.imgURL)


}

export default class ImageController {
  constructor() {
    console.log("image controller loaded")

    _is.addSubscriber("image", drawImage)
    _is.getImage()
  }

}

