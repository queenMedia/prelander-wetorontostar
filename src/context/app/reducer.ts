import { ContextAppReducerAction, ContextAppState } from "@interfaces";

const DEFAULT_IMAGE = "";

export default function reducer(state: ContextAppState, action: ContextAppReducerAction): ContextAppState {
  switch (action.type) {
    case "SIGNIN":
      const { sessionId, onboarding, profileImage: imageUrl, ...defaultUser } = action.payload;
      const profileImage = (imageUrl === "" || imageUrl === null || imageUrl === undefined) ? DEFAULT_IMAGE : imageUrl;
      const user = { ...defaultUser, profileImage };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("sessionId", sessionId);
      return {
        ...state,
        user,
        sessionId,
        onboarding
      };
    case "SIGNOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("sessionId");
      return {
        ...state,
        user: {},
        sessionId: null
      };
    case "CHANGE_ONBOARDING":
      return {
        ...state,
        onboarding: action.payload
      };
    default:
      return state;
  }
}
