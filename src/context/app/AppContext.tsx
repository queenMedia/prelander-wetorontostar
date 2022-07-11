import { createContext, useContext, useReducer, useMemo } from "react";
import { ContextApp, ContextAppProvider, ContextAppState } from "@interfaces";
import reducer from "./reducer";

const AppContext = createContext<ContextApp>({
  global: {
    sessionId: null,
    user: {},
    onboarding: null
  },
  dispatch: () => { }
});

export function AppProvider({ children }: ContextAppProvider) {
  const storageSession = localStorage.getItem("sessionId");
  const storageUser = localStorage.getItem("user");

  const initialState: ContextAppState = {
    sessionId: storageSession || null,
    user: storageUser ? JSON.parse(storageUser) : {},
    onboarding: null
  };

  const [global, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({
    global, dispatch
  }), [global]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
