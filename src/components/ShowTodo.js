import React from "react";
import { DelItem } from "../Style/style";

function ShowTodo(props) {
  return (
    <>
      {props.task}
      <DelItem
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        X
      </DelItem>
    </>
  );
}

export default ShowTodo;
