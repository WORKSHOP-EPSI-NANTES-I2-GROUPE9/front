import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeTranslation = (locale: string) => i18n.changeLanguage(locale);

  return (
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
        </div>
      </Router>
  );
};

export default App;
