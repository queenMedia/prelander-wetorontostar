/* eslint-disable react/display-name */
import { ComponentType } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { HOCAuth, HOCAuthType } from "@interfaces";
import { useAppContext } from "@context";

const authRoutes = ["/signin", "/signup", "/forgot", "/reset"];

function withAuth<T extends HOCAuth>(Component: ComponentType<T>, type: HOCAuthType = "page") {
  return (props: Omit<T, keyof HOCAuth>) => {

    const { global: { user, sessionId } } = useAppContext();
    const { pathname, search } = useLocation();
    const authenticated = (JSON.stringify(user) === JSON.stringify({}) && sessionId === null);

    const unprotectedPages = authRoutes.some((page) => page === pathname);

    if (type === "component") return <Component {...(props as T)} auth={authenticated} />;

    if (authenticated && unprotectedPages) return <Navigate to="/" replace />;

    if ((!authenticated && unprotectedPages) || (authenticated && !unprotectedPages)) {
      return <Component {...(props as T)} auth={authenticated} />;
    }

    return (<Navigate to="/signin" state={{ from: pathname + search }} replace />);
  };
}

export default withAuth;
