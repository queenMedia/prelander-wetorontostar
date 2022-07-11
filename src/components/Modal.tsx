import { MouseEvent } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { ModalProps } from "@interfaces";
import { useDatas } from "@hooks";

import "@stylesComponents/Modal.scss";

// import Logo from "@icons/logo.svg";
// import IconClose from "@icons/icon-close.svg";

const DEFAULT_CONFIG = {
  small: false,
  white: false,
  center: false,
  close: false,
  scroll: false,
  header: true
};

export default function Modal({ children, title = "", config = DEFAULT_CONFIG, open, onClose }: ModalProps) {
  const root = document.querySelector("#modal-root");
  const { t } = useTranslation("modal", { useSuspense: false });
  const datas = useDatas(config);

  const handleStopPropagation = (event: MouseEvent) => {
    event.stopPropagation();
  };

  if (!root) throw new Error("There is no tag with the id \"modal-root\"");
  if (!open) return null;

  return createPortal(
    <section
      className="modal"
      data-hastitle={Boolean(title)}
      onClick={onClose}
      role="dialog"
      {...datas}
    >
      <div className="modal__container" onClick={handleStopPropagation} role="alertdialog">
        {config.header ? (
          <div className="modal__header">
            {title ? (
              <h2 className="modal__title">{title}</h2>
            ) : (
              <img src="Logo" alt="" className="modal__logo" />
            )}
          </div>
        ) : null}
        <div className="modal__content">
          {children(config)}
        </div>
        <button type="button" className="modal__button" onClick={onClose}>
          {!config.close ? (
            <span>{t("modal-accept")}</span>
          ) : (
            <img src="IconClose" alt="" className="modal__button-icon" />
          )}
        </button>
      </div>
    </section>,
    root
  );
}
