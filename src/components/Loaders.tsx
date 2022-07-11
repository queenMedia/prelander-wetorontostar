import { createPortal } from "react-dom";
import { LoaderProps } from "@interfaces";

import "@stylesComponents/Loader.scss";

export const Loader = ({ msg }: LoaderProps) => (
  <div className="loader">
    {msg}
  </div>
);

export const LoaderPage = ({ msg = "" }: LoaderProps) => {
  const root = document.querySelector("#loader-root");

  if (!root) throw new Error("There is no tag with the id \"loader-root\"");

  return createPortal(
    <div className="loader-page">
      <Loader msg={msg} />
    </div>,
    root
  );
};
