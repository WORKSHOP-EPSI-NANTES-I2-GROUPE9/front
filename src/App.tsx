import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { of } from "await-of";
import { appStateContext } from "./AppContext";
import { AppState, AppStateContext } from "./types";
import "./App.css";
import { fetchAPI } from "./api/api";
import { API_URL } from "./config";
import Home from "./Home/Home";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeTranslation = (locale: string) => i18n.changeLanguage(locale);
  const [appState, setAppState] = useState<AppState>({
  });
  const appStateContextValue: AppStateContext = { appState, setAppState };

  return (
    <appStateContext.Provider value={appStateContextValue}>
      <Router>
        <div className="App">
          <header className="App-header">
            <div>
              <Link to="/" className="App-header-item">
                {t("nav.home")}
              </Link>
            </div>
            <div>
              <a
                className="App-header-item-translation cy-translation-en"
                onClick={() => changeTranslation("en")}
              >
                EN
              </a>
              <a
                className="App-header-item-translation cy-translation-fr"
                onClick={() => changeTranslation("fr")}
              >
                FR
              </a>
            </div>
          </header>
          <div className="content">
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>·
      </Router>
    </appStateContext.Provider>
  );
};

export default App;
