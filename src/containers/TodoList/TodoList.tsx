import React, { useState } from "react";
import List from "src/components/List";
import InputForm from "src/components/InputForm";
import Button from "src/components/Button";
export interface ListInterface {
  id: number;
  label: string;
  checked: boolean;
}

const TodoList = () => {
  const [list, setList] = useState<ReadonlyArray<ListInterface>>([]);

  const handleAddItem = (item: string) => {
    const maxIdFromList =
      list.length > 0
        ? list.reduce((previousValue, currentValue) =>
            previousValue > currentValue ? previousValue : currentValue
          ).id
        : 0;
    setList([...list, { id: maxIdFromList + 1, label: item, checked: false }]);
  };

  const handleCrossItem = (id: number) => {
    setList((currentList) =>
      currentList.map((element) =>
        element.id === id ? { ...element, checked: !element.checked } : element
      )
    );
  };

  const handleResetList = () => {
    setList([]);
  };

  return (
    <>
      <InputForm onSubmit={handleAddItem} />
      <List list={list} onClick={handleCrossItem} />
      {list.length > 0 && (
        <Button label={"Reset list"} onClick={handleResetList} />
      )}
    </>
  );
};

export default TodoList;
