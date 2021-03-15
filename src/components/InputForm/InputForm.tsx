import React, { useState } from "react";
import styles from "./InputForm.module.scss";

const InputForm = ({ onSubmit }: { onSubmit: (item: string) => void }) => {
  const [currentInput, setCurrentInput] = useState<string>("");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(currentInput);
    setCurrentInput("");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        onChange={(event) => handleChangeInput(event)}
        value={currentInput}
        placeholder={"What to do..."}
        className={styles.Input}
      />
    </form>
  );
};

export default InputForm;
