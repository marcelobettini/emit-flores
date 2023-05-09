import { IPaymentApp } from "./3-paymentAppsInterface";
import { IPaymentResponse } from "./1-paymentStrategyInterface";
import { log } from "console";
export class MercadoPagoStrategy implements IPaymentApp {
  constructor(public userEmail: string) { }
  pay(userId: string, amount: number): IPaymentResponse {
    log(`🚀 MercadoPago -> Transacción para usuario ${userId} por $${amount} ha sido aprobada`);
    return { isSuccess: true };
  }

}