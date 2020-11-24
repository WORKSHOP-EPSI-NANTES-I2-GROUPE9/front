import { stringify } from "querystring";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";

type Result = { label: string; score: number } | undefined;

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Result>(undefined);

  const onTextInputChange = (e: any) => {
    const input = e.target.value;
    // TODO: verify input value
    setInput(input);
  };
  const onInputClick = () => {
    console.log("submit", input);
  };

  return (
    <div className="container">
      <p>{t("app.description")}:</p>
      <textarea onChange={onTextInputChange} />
      <button type="submit" onClick={onInputClick}>
        {t("app.send")}
      </button>
      {result ? (
        <p>{`${t("app.result")}: ${result.score}% ${result.label}`}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
