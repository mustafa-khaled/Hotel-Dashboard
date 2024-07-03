import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function TranslationButton() {
  const { t, i18n } = useTranslation();

  const languageNow = i18n.language;

  useEffect(() => {
    if (languageNow === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [languageNow]);

  const changeLanguageAndDirection = (language) => {
    i18n.changeLanguage(language);

    if (language === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else if (language === "en") {
      document.documentElement.setAttribute("dir", "ltr");
    }
  };

  const handleChange = (event) => {
    changeLanguageAndDirection(event.target.value);
  };

  return (
    <select
      className="rounded-sm border-none bg-colorGrey2 p-[5px] text-textColor outline-none"
      onChange={handleChange}
      value={languageNow}
    >
      <option value="en">{t("general.english")}</option>
      <option value="ar">{t("general.arabic")}</option>
    </select>
  );
}

export default TranslationButton;
