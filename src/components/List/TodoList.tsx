import React from "react";
import { ListInterface } from "src/containers/TodoList/TodoList";
import cx from "classnames";
import styles from "./List.module.scss";

interface Props {
  list: ReadonlyArray<ListInterface>;
  crossItem: (id: number) => void;
}

const TodoList = ({ list, crossItem }: Props) => {
  return (
    <>
      {list.map((item) => {
        const itemClasses = cx({
          [styles.ItemList]: true,
          [styles.ItemListDisabled]: item.checked,
        });

        return (
          <div onClick={() => crossItem(item.id)} className={itemClasses}>
            {item.label}
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
