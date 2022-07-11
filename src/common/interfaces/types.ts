import { Dispatch, ReactNode } from "react";

export type ObjStrBoolean = {
  [key: string]: boolean;
};

export type ObjStrString = {
  [key: string]: string;
};

export type ObjStrUnknown = {
  [key: string]: unknown;
};

export type ObjStrCommon = {
  [key: string]: boolean | number | string;
};

export type ContextAppState = {
  sessionId: string | null;
  user: any;
  onboarding: null;
};

export type ContextAppReducerAction = {
  type: string;
  payload?: any;
};

export type ContextApp = {
  global: ContextAppState;
  dispatch: Dispatch<ContextAppReducerAction>;
};

export type ContextAppProvider = {
  children: ReactNode;
};

export type HookModalParameters = null | string;

export type HookModalFunc = (custom?: unknown) => void;

export type HookModalReturn = [boolean, HookModalFunc];

export type HookMediaParameters = HookModalParameters;

export type HookMediaReturn = boolean;

export type HOCAuthType = "component" | "page";

export type Boot = {
  required: string;
};

export type BootAuthSignup = Boot & {
  requiredTerms: string;
  email: string;
};

export type BootContact = Boot & BootAuthSignup & {
  onlyNumbers: string;
};

export type AuthSocialType = "signin" | "signup";
