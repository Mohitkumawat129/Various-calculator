function iCustom() {
  let buy_price = Number(document.getElementById("bPrice").value);
  let sell_price = Number(document.getElementById("sPrice").value);
  let quantity = Number(document.getElementById("quantity").value);

  let turnover = document.getElementById("turnover");
  let turnover1 = (buy_price + sell_price) * quantity;
  turnover.innerHTML = `Turnover:${turnover1}`;

  let brokerage = document.getElementById("brokerage");
  let brokerage1 = turnover1 * 0.0003;
  brokerage.innerHTML = `Brokerage:${brokerage1}`;

  let others = document.getElementById("tax");
  let others1 = turnover1 * 0.0005;
  others.innerHTML = `Tax & Others:${others1}`;

  let profit_loss = document.getElementById("npl");
  let profit_loss1 =
    sell_price * quantity - buy_price * quantity - (brokerage1 + others1);
  profit_loss.innerHTML = `Net P&L:  ${profit_loss1}`;
  if (profit_loss1 < 1) {
    profit_loss.style.color = "red";
  } else {
    profit_loss.style.color = "green";
  }
}

function dCustom() {
  let dBuy_price = Number(document.getElementById("dBPrice").value);
  let dSell_price = Number(document.getElementById("dSPrice").value);
  let dQuantity = Number(document.getElementById("dQuantity").value);

  let dTurnover = document.getElementById("dTurnover");
  let dTurnover1 = (dBuy_price + dSell_price) * dQuantity;
  dTurnover.innerHTML = `Turnover:${dTurnover1}`;

  let dBrokerage = document.getElementById("dBrokerage");
  let dBrokerage1 = 15.93;
  dBrokerage.innerHTML = `Brokerage:${dBrokerage1}`;

  let dOthers = document.getElementById("dTax");
  let dOthers1 = dTurnover1 * 0.0005;
  dOthers.innerHTML = `Tax & Others:${dOthers1}`;

  let dProfit_loss = document.getElementById("dNpl");
  let dProfit_loss1 =
    dSell_price * dQuantity - dBuy_price * dQuantity - (dBrokerage1 + dOthers1);
  dProfit_loss.innerHTML = `Net P&L:  ${dProfit_loss1}`;

  if (dProfit_loss1 < 1) {
    dProfit_loss.style.color = "red";
  } else {
    dProfit_loss.style.color = "green";
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function eCustom() {
  let loan_amount = document.getElementById("amount").value;
  let loan_tenure = document.getElementById("tenure").value;
  let interest_rate = document.getElementById("iRate").value;
  let emi = document.getElementById("emi");
  let principal = document.getElementById("principal");
  let total_interest = document.getElementById("tInterest");
  let total_amount = document.getElementById("tAmount");

  let interest = (loan_amount * (interest_rate * 0.01)) / loan_tenure;

  let monthly_interest = (loan_amount / loan_tenure + interest).toFixed(2);

  emi.innerHTML = `Monthly EMI: ${monthly_interest}`;
  principal.innerHTML = `Principal Amount:${loan_amount}`;
  total_interest.innerHTML = `Total Interest:${(interest * loan_tenure).toFixed(
    2
  )}`;
  total_amount.innerHTML = `Total Amount:${
    Number(loan_amount) + Number(monthly_interest) * Number(loan_tenure)
  }`;
}
/////////////////////////////////////////////////////////////////////////////////////////////

function custom1() {
  let celcius = document.querySelector("#celcius");
  let kelvin = document.getElementById("kelvin");
  let fahrenheit = document.querySelector("#fahrenheit");

  kelvin.innerHTML = "ksjfngkj";
}
