import { Checkout } from "./7-checkout";
import { VisaStrategy } from "./4-visaStrategy";
import { PayPalStrategy } from "./5-paypalStrategy";
import { MercadoPagoStrategy } from "./6-mercadopagoStrategy";
const checkout: Checkout = new Checkout();

const operation = {
  userId: "334-oeie-009",
  userEmail: "compradorcompulsivo@tiendamia.com",
  cardNumber: "1234-4567-7890-0954",
  cvv: "778",
  amount: 89000,
  paymentMethod: "visa"
};

if (operation.paymentMethod === 'visa') checkout.setStrategy(new VisaStrategy(operation.cardNumber, operation.cvv));

if (operation.paymentMethod === 'paypal') checkout.setStrategy(new PayPalStrategy(operation.userEmail));

if (operation.paymentMethod === 'mercadopago') checkout.setStrategy(new MercadoPagoStrategy(operation.userEmail));

checkout.pay(operation.userId, operation.amount);