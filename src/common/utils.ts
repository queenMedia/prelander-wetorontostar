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

const updateCurrent = (paramStatus = false) => {
  const url = window.location.href;
  let newCurrent = "https://givemes.com/outgoing";

  if (url && paramStatus) {
    newCurrent += (url.split("?")[1] ? `?${url.split("?")[1]}` : "");
  }

  return newCurrent;
};

export { updateCurrent };

export function actionImg() {
  const img = document.getElementsByTagName("img");
  const url = updateCurrent();

  for (let i = 0; i < img.length; i++) {
    img[i].classList.add("link");
    img[i].addEventListener("click", () => {
      window.open(url, "_blank");
    });
  }
}

export function actionContent() {
  const links = document.querySelectorAll("[data-link]");
  const url = updateCurrent();

  for (let i = 0; i < links.length; i++) {
    links[i].classList.add("link");
    links[i].addEventListener("click", () => {
      window.open(url, "_blank");
    });
  }
}
