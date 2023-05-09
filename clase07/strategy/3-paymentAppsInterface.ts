import { IPaymentStrategy } from "./1-paymentStrategyInterface";
export interface IPaymentApp extends IPaymentStrategy {
  userEmail: string;
}
