import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  MouseEvent,
  ReactNode,
  TextareaHTMLAttributes
} from "react";
import { FieldHookConfig } from "formik";

import { HOCAuth, HOCDatasets, HOCField } from "./interfaces";
import {
  HookModalFunc,
  ObjStrBoolean,
  ObjStrCommon
} from "./types";

export interface HOCDatasetsProps {
  data?: ObjStrCommon;
}

export type HOCFieldProps = {
  data?: ObjStrCommon;
  label: string;
  file?: boolean;
  readOnly?: boolean;
};

export interface InputProps extends HOCDatasetsProps, HOCDatasets {
  children?: ReactNode;
  id?: string;
  name: string;
  value?: string;
  checked: boolean;
  label?: string;
  label2?: string | null;
  payment?: boolean;
  onSelect?: (event?: MouseEvent) => void;
}

type InputElement = Omit<
DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
keyof FieldHookConfig<string>
>;

export type InputFieldProps = HOCFieldProps & HOCField & InputElement & {
  id?: string;
  name: string;
  type: string;
  placeholder?: string;
};

type AreaElement = Omit<
DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
keyof FieldHookConfig<string>
>;

export type AreaFieldProps = HOCFieldProps & HOCField & AreaElement & {
  id?: string;
  name: string;
  placeholder?: string;
};

export type FileFieldProps = HOCFieldProps & HOCField & InputElement & {
  id?: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  profile?: boolean;
  onChange?: (values: FileList[] | File) => void;
};

type SelectOption = {
  value: string;
  label: string;
  key?: string;
};

export type SelectFieldProps = Omit<HOCFieldProps, "file"> & HOCField & {
  id?: string;
  name: string;
  options: SelectOption[];
  value?: string | null;
  withoutValue?: string;
  onSelect?: (value: unknown) => void;
};

export interface LanguageProps {
  onClose?: VoidFunction;
}

export type HeaderProps = HOCAuth;

export interface LoaderProps {
  msg?: string;
}

export interface ModalProps {
  children: (config: ObjStrBoolean) => ReactNode;
  title?: string;
  config?: ObjStrBoolean;
  open: boolean;
  onClose: HookModalFunc;
}

export interface ScrollLinkProps {
  to: string;
  text: string;
  compareHash: string;
  className: string;
  children: ReactNode;
  span?: boolean;
}
