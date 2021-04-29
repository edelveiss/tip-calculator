//Calculates total tips
const calculateTotalTip = (price, tipPercent) => {
  return ((price * tipPercent) / 100).toFixed(2);
};
//Calculates total amount
const calculateTotalAmount = (price, tipPercent) => {
  return Number(price) + Number(calculateTotalTip(price, tipPercent));
};
//Calculates amount without tips
const calculateAmountWithoutTipsPerPerson = (
  price,
  tipPercent,
  numberOfPeople
) => {
  return (
    (calculateTotalAmount(price, tipPercent) -
      calculateTotalTip(price, tipPercent)) /
    numberOfPeople
  );
};
//Calculates tip per person
const calculateTipPerPerson = (price, tipPercent, numberOfPeople) => {
  return calculateTotalTip(price, tipPercent) / numberOfPeople;
};
//Calculates total amount per person
const calculateTotalAmountPerPerson = (price, tipPercent, numberOfPeople) => {
  return calculateTotalAmount(price, tipPercent) / numberOfPeople;
};

module.exports = {
  calculateTotalTip,
  calculateTotalAmount,
  calculateAmountWithoutTipsPerPerson,
  calculateTipPerPerson,
  calculateTotalAmountPerPerson,
};
