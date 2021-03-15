import React from "react";
import logo from "src/assets/logo.svg";
import styles from "src/components/App/App.module.scss";
import TodoList from "src/containers/TodoList";

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src={logo} className={styles.Logo} alt="logo" />
      </header>
      <h1 className={styles.Title}>Todo list</h1>
      <TodoList />
    </div>
  );
};

export default App;
