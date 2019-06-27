import BGImage from "../../models/bgimage.js"


// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}

export default class ImageService {
	constructor() {
		console.log("img service loaded")
	}

	getImage() {
		imgApi.get()
			.then(res => {
				setState('image', new BGImage(res.data))
			})
			.catch(err => console.error(err))
	}

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}




	get imgURL() {
		return _state.image.url.slice(0)
	}
}
