export default class Quote {
  constructor(data) {
    this.author = data.author || ""
    this.body = data.body || ""
  }

  get Template() {
    return `<h1>${this.body}</h1><h5 class="text-right">${this.author}</h5>`
  }
}