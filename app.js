//https://api.exchangerate.host/latest?base=
const firstSelect=document.getElementById("firstCurrency");
const secondSelect=document.getElementById("secondCurrency");
const amount=document.getElementById("amount");
const currency=new Currency("USD","TRY");
const ui=new UI();

eventListeners();
function eventListeners() {
    amount.addEventListener("input",exchangeCurrency);
    firstSelect.onchange=function () {
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.firstSelect(firstSelect.options[firstSelect.selectedIndex].textContent);
    };
    secondSelect.onchange=function () {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.secondSelect(secondSelect.options[secondSelect.selectedIndex].textContent);
    };
}
function exchangeCurrency() {
    currency.changeAmount(amount.value);
    currency.exchange()
    .then(response=>{
        ui.totalAmount(response);
    })
    .catch(err=>console.log(err));
}