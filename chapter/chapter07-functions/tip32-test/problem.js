import { getTaxInformation } from './taxService.js';

function formatPrice(user, { price, location }) {
  const rate = getTaxInformation(location); // <label id="test.external" />
  const taxes = rate ? `plus $${price * rate} in taxes.` : 'plus tax.';

  return `${user} your total is: ${price} ${taxes}`;
}

export { formatPrice };
