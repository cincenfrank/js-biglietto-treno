const priceByKmInEuro = 0.21;
const juniorDiscount = 0.2;
const seniorDiscount = 0.4;

const distanceKmRaw =
  prompt(`Welcome to the best train ticketing service online!
In order to calculate your ticket we need to know how many kilometers you need to cover for your travel.`);
const distanceKmFloat = parseFloat(distanceKmRaw.replace(",", "."));
if (isNaN(distanceKmFloat)) {
  alert(
    `"${distanceKmRaw}" is a non valid value for distance. Please refresh the page and try again.`
  );
} else {
  const customerAgeRaw = prompt(`Well done! 
Can you please tell us your age in order to verify if we have any type of discount we can apply to your order?`);
  const customerAgeInt = parseInt(customerAgeRaw);
  if (isNaN(customerAgeInt)) {
    alert(
      `"${customerAgeRaw}" is a non valid value for age. Please refresh the page and try again.`
    );
  } else {
    let ticketDiscountPercentage = 0;

    if (customerAgeInt < 18) {
      ticketDiscountPercentage = juniorDiscount;
      discountMessage = `Good News! We have applied a ${(
        juniorDiscount * 100
      ).toFixed(0)}% discount reserved for our junior customers!`;
    } else if (customerAgeInt > 65) {
      ticketDiscountPercentage = seniorDiscount;
      discountMessage = `Good News! We have applied a ${(
        seniorDiscount * 100
      ).toFixed(0)}% discount reserved for our senior customers!`;
    } else {
      discountMessage = `We have applied our best offer based on our regular price list.`;
    }

    let finalMessage = `Thank you for choosing us!`;
    let ticketPrice = distanceKmFloat * priceByKmInEuro;
    if (ticketDiscountPercentage > 0) {
      let discountedPrice = ticketPrice * (1 - ticketDiscountPercentage);
      finalMessage =
        `Original price was ${ticketPrice.toFixed(2)}€. You just saved ${(
          ticketPrice - discountedPrice
        ).toFixed(2)}€!!!
` + finalMessage;
      ticketPrice = discountedPrice;
    }

    alert(`We have processed your order!

${discountMessage}

Your final ticket price is: ${ticketPrice.toFixed(2)} €.

${finalMessage}`);
  }
}
