export interface IPaymentStrategy {
  pay(userId: string, amount: number): IPaymentResponse;
}

export interface IPaymentResponse {
  isSuccess: boolean,
  errorMessage?: string;
}