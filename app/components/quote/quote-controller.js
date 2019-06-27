import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  document.querySelector("#quote").innerHTML = _qs.Quote.Template;

}

export default class QuoteController {
  constructor() {
    console.log("quote controller loaded")
    _qs.addSubscriber("quote", drawQuote)
    _qs.getQuote();
  }
}
