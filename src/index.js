import React from "react";
import ReactDOM from "react-dom";
import messages_es from "./locales/es.json";
import messages_en from "./locales/en.json";
import JobsList from "./components/jobslist";
import { IntlProvider } from "react-intl";
import "bootstrap/dist/css/bootstrap.min.css";

const messages = {
  es: messages_es,
  en: messages_en,
};

const getLanguage = () => {
  const userLang = navigator.language || navigator.userLanguage;
  const language = userLang.split(/[-_]/)[0];
  return language;
};

const language = getLanguage();
const test;

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <JobsList language={language} />
  </IntlProvider>,
  document.getElementById("root")
);
