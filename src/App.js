import { useState, useEffect } from "react";
import styled from "styled-components";

import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

function App() {
  const [newTodo, setNewTodo] = useState("");

  const [changed, setChanged] = useState(false);

  const [list, setList] = useState([]);
  const todoListCollectionRef = collection(db, "TodoList");

  useEffect(() => {
    const getList = async () => {
      const data = await getDocs(todoListCollectionRef);
      setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getList();
    setChanged(false);
  }, [changed]);

  const add = async () => {
    await addDoc(todoListCollectionRef, { todolist: newTodo });
    setChanged(true);
  };

  const remove = async (id) => {
    const listDoc = doc(db, "TodoList", id);
    await deleteDoc(listDoc);
    setChanged(true);
  };

  const showList = list.map((value, index) => (
    <div key={index} style={{ margin: "20px", display: "flex", gap: "20px" }}>
      <h1>{value.todolist}</h1>
      <button
        style={{
          border: "none",
          borderRadius: "7px",
          backgroundColor: "red",
          color: "white",
        }}
        onClick={() => {
          remove(value.id);
        }}
      >
        Complete
      </button>
    </div>
  ));
  return (
    <Container>
      <ListBox>
        <input
          type="text"
          placeholder="오늘의 할일"
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
        />
        <button onClick={add}>Add New Todo</button>
        {showList}
      </ListBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #bf7507;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListBox = styled.div`
  width: 90%;
  height: 80%;
  background-color: white;
  border-radius: 13px;
  padding: 30px;
`;

export default App;
