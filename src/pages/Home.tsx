import { useTranslation } from "react-i18next";

import "@stylesPages/Home.scss";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h1 className="home__title">{t("home-title")}</h1>
    </div>
  );
}
