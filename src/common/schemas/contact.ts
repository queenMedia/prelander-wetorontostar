import * as Yup from "yup";
import { BootContact, ContactValues } from "@interfaces";

export const ContactSchema = (boot: BootContact) => Yup.object().shape({
  name: Yup.string().required(boot.required),
  phone: Yup.string().matches(/[0-9]/, boot.onlyNumbers).required(boot.required),
  email: Yup.string().email(boot.email).required(boot.required),
  message: Yup.string().max(200),
  subject: Yup.string().max(80),
  terms: Yup.boolean().oneOf([true], boot.requiredTerms)
});

export const DEFAULT_CONTACT_VALUES: ContactValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
  subject: "",
  terms: false
};
