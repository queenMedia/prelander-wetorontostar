import { FieldHelperProps, FieldInputProps, FieldMetaProps } from "formik";
import { ObjStrCommon } from "./types";

export interface HOCDatasets {
  datas: ObjStrCommon;
}

export interface HOCField {
  error: boolean;
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
  helpers: FieldHelperProps<any>;
}

export interface HOCAuth {
  auth: boolean;
}

export interface SigninValues {
  email: string;
  password: string;
}

export interface ResetValues {
  password: string;
  confirmPassword: string;
}

export interface SignupValues extends ResetValues {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  phoneNumber: string;
  phoneCode: string;
  terms: boolean;
}

export interface ContactValues {
  name: string;
  phone: string;
  email: string;
  message: string;
  subject: string;
  terms: boolean;
}

export interface AuthStateFrom {
  from?: string;
}
