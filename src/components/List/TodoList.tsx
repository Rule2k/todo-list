import React from "react";
import { ListInterface } from "src/containers/TodoList/TodoList";
import cx from "classnames";
import styles from "./List.module.scss";

interface Props {
  list: ReadonlyArray<ListInterface>;
  onClick: (id: number) => void;
}

const List = ({ list, onClick }: Props) => {
  return (
    <div className={styles.List}>
      {list.map((item) => {
        const itemClasses = cx({
          [styles.ItemList]: true,
          [styles.ItemListDisabled]: item.checked,
        });

        return (
          <div
            onClick={() => onClick(item.id)}
            className={itemClasses}
            key={item.id}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default List;
