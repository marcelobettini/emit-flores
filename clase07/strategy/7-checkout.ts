/* esta es la clase encargada de hacer los pagos, escogiendo la estrategia (algoritmo) más apropiada*/

import { IPaymentStrategy, IPaymentResponse } from "./1-paymentStrategyInterface";

export class Checkout {
  private context?: IPaymentStrategy;
  public setStrategy(context: IPaymentStrategy) {
    this.context = context;
  };
  pay(userId:string, amount:number): IPaymentResponse{
    if(!this.context) {
      throw new Error("es necesario definir el contexto")
    }
    return this.context.pay(userId, amount)
  }
}