var greeting = "[not initialized]";
var name = "[not initialized]";
var message = "[not initialized]";
var welcome;
var sign = "[not initialized]";
var tiles, subTotal, shipping, grandTotal;

function calcSign() {
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function initiateVars() {
  greeting = "Howdy";
  name = "Barry";
  message = "Plz check your order:";
  sign = "javascript";
  welcome = greeting + "! " + name + ", " + message;
  calcSign();
}

function setTextContentById(getId, setMsg) {
  var el = document.getElementById(getId);
  el.textContent = setMsg;
}

(function() {
  initiateVars();
  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);
  setTextContentById("tiles", tiles);
  setTextContentById("subTotal", "$" + subTotal);
  setTextContentById("shipping", "$" + shipping);
  setTextContentById("grandTotal", "$" + grandTotal);
});