export default class Quote {
  constructor(data) {
    this.author = data.author || ""
    this.body = data.body || ""
  }

  get Template() {
    return `"${this.body} -- ${this.author}`
  }
}