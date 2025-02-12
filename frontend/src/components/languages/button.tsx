// Dependencies
import { FC, useState, useEffect } from "react";
import i18n from "i18next";
import { useNavigate } from "react-router-dom";

const LanguagesBtn: FC = () => {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const currentLanguage = i18n.language;
    setLanguage(currentLanguage);
  }, []);

  const navigate = useNavigate()

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    window.location.reload()
    navigate("/")
  };

  return (
    <div className="flex items-center ">
      <button
        className="bg-[#57C8BF] text-white  ml-3 px-2 py-1 overflow-y-hidden rounded-md shadow-md "
        onClick={toggleLanguage}
      >
        {language === "en" ? "AR" : "EN"}
      </button>
    </div>
  );
};

export default LanguagesBtn;
