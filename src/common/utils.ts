export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export class PaymentError extends Error {
  title: string;
  date: Date;

  constructor(title = "!Oh no¡", ...params: any[]) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PaymentError);
    }

    this.name = "PaymentError";
    this.title = title;
    this.date = new Date();
  }
}

export function actionImg() {
  const img = document.getElementsByTagName("img");
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", () => {
      window.location.href = "https://givemes.com/outgoing";
    });
  }
}
