import { IPaymentStrategy } from "./1-paymentStrategyInterface";
export interface IPaymentCard extends IPaymentStrategy {
  cardNumber: string;
  cvv: string;
}