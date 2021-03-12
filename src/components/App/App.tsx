import React from "react";
import logo from "src/assets/logo.svg";
import styles from "src/components/App/App.module.scss";
import TodoListPage from "src/pages/TodoListPage";

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src={logo} className={styles.Logo} alt="logo" />
      </header>
      <TodoListPage />
    </div>
  );
};

export default App;
