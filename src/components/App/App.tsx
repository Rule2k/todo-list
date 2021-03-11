import React from "react";
import logo from "src/assets/logo.svg";
import styles from "src/components/App/App.module.scss";
import HelloWorld from "src/components/HelloWorld";

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src={logo} className={styles.Logo} alt="logo" />
        <HelloWorld />
      </header>
    </div>
  );
};

export default App;
