import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { of } from "await-of";
import { fetchAPI } from "../api/api";
import { API_URL } from "../config";
import "./Home.css";

type Result = { label: string; score: number } | undefined;

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Result>(undefined);
  const [fetchError, setFetchError] = useState("");

  const onTextInputChange = (e: any) => {
    const input = e.target.value;
    // TODO: verify input value
    setInput(input);
  };
  const onInputClick = async () => {
    const [result, err] = await of(
      fetchAPI(fetch, API_URL, { message: input })
    );
    if (err) {
      setFetchError(JSON.stringify(err));
      return;
    }
    setResult(result);
  };

  return (
    <div className="container">
      <p>{t("app.description")}:</p>
      <textarea onChange={onTextInputChange} />
      <button type="submit" onClick={onInputClick}>
        {t("app.send")}
      </button>
      {result ? (
        <p>{`${t("app.result")}: ${Math.round(result.score)}%, ${
          result.label
        }`}</p>
      ) : (
        ""
      )}
      <p className="error">{fetchError !== "" ? `Error: ${fetchError}` : ""}</p>
    </div>
  );
};

export default Home;
