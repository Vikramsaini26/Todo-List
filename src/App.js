import React, { useState } from "react";
import ShowTodo from "./components/ShowTodo";
import {} from "./App.css";
import {
  Submit,
  InputField,
  TopField,
  Title,
  List,
  Container,
  OrderList,
  DelItem,
} from "./Style/style";

function App() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = task;
    setData([...data, newData]);

    setTask("");
  };

  const deleteItem = (a) => {
    const finalData = data.filter((curEle, index) => {
      return index !== a;
    });
    setData(finalData);
  };

  return (
    <Container>
      <Title>ToDo List</Title>
      <form onSubmit={submitHandler}>
        <TopField>
          <InputField
            id="todo-input"
            type="text"
            value={task}
            placeholder="Add Items"
            onChange={onChangeHandler}
          />

          <Submit type="submit">+</Submit>
        </TopField>
      </form>
      <List>
        <OrderList>
          {data.map((value, index) => {
            return (
              <li>
                <ShowTodo
                  key={index}
                  id={index}
                  task={value}
                  onSelect={deleteItem}
                />
              </li>
            );
          })}
        </OrderList>
      </List>
    </Container>
  );
}

export default App;
