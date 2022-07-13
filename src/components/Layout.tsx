import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useModal } from "@hooks";

import "@stylesComponents/Layout.scss";

import { Header, Footer } from "@components";

export default function Layout() {
  const { pathname } = useLocation();
  const [modal, toggleModal] = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="layout">
        <Outlet context={{ modal, toggleModal }} />
      </main>
      <Footer />
    </>
  );
}
