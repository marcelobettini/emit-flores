//1: Sin patrón de diseño: Esto funciona. No es escalable. La clase es fuertemente dependiente del método que ejecuta el proceso de pago.
import { log } from "console";

class Checkout {
  public static payWith(
    paymentMethod: string,
    userId: string,
    amount: number,
    userEmail?: string,
    cardNumber?: string,
    cvv?: string): void {
    switch (paymentMethod) {
      case 'mercadopago':
        log(` 🛴... ejecutando transacción con ${paymentMethod}`);
        break;
      case 'paypal':
        log(` 🛴... ejecutando transacción con ${paymentMethod}`);
        break;
      case 'visa':
        log(` 🛴... ejecutando transacción con ${paymentMethod}`);
        break;
      default: return;
    }
  }
}

Checkout.payWith('mercadopago', '334-uyi-665', 67000, 'lucas@mail.com.ch');

/* 2: Veamos una clase un poco más eficiente, con la lógica de cada medio de pago desacoplada en sus propias funciones. Un método por cada modo de pago (MercadoPago, PayPal, Visa...). Escalará mejor. No necesita params opcionales. No hago falicaciones como en la clase anterior.
Lo malo: cada método usa una API distinta, con todo el peso que eso significa y la clase se vuelve muy dependiente de los métodos y las respectivas API. Esta clase ya tiene muchas responsabilidades de entrada... ni imaginemos si sigue escalando. A lot of code for a single class.
DRY ? hmmm...supongamos que validamos userID, hay que hacerlo en payWithPayPal, payWithMercadoPago, etc. Y si extraemos esa validación a un private method, de todos modos debemos correrlo en cada método de medio de pago.
 */

class Checkout2 {
  public static payWithPayPal(userId: string, amount: number, userEmail: string): void {
    log('🛵... ejecutando transacción con PayPal');
  };
  public static payWithMercadoPago(userId: string, amount: number, userEmail: string): void {
    log('🛵... ejecutando transacción con MercadoPago');
  }
  public static payWithVisa(userId: string, amount: number, cardNumber: string, cvv: string): void {
    log('🛵... ejecutando transacción con Visa');
  }
}

Checkout2.payWithVisa("567-opp-09po", 102000, "1234-5678-9098-3343", "668");