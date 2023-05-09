import { IPaymentCard } from "./2-paymentCardInterface";
import { IPaymentResponse } from "./1-paymentStrategyInterface";
import { log } from "console";
export class VisaStrategy implements IPaymentCard {
  constructor(public cardNumber: string, public cvv: string) { }
  pay(userId: string, amount: number): IPaymentResponse {
    log(`🚀 Visa -> Transacción para usuario ${userId} por $${amount} ha sido aprobada`);
    return { isSuccess: true };
  }

}

