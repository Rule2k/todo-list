import React, { useState } from "react";

const InputForm = ({ addItem }: { addItem: (item: string) => void }) => {
  const [currentInput, setCurrentInput] = useState<string>("");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addItem(currentInput);
    setCurrentInput("");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        onChange={(event) => handleChangeInput(event)}
        value={currentInput}
        placeholder={"What to do..."}
      />
    </form>
  );
};

export default InputForm;
