import { IPaymentApp } from "./3-paymentAppsInterface";
import { IPaymentResponse } from "./1-paymentStrategyInterface";
import { log } from "console";
export class PayPalStrategy implements IPaymentApp {
  constructor(public userEmail: string) { }
  pay(userId: string, amount: number): IPaymentResponse {
    log(`🚀 PayPal -> Transacción para usuario ${userId} por $${amount} ha sido aprobada`);
    return { isSuccess: true };
  }

}
