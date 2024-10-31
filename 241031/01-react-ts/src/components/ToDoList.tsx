import { useForm } from "react-hook-form";
import styled from "styled-components";
import { atom } from "recoil";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgrey;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Form {
  toDo: string;
}

const toDoState = atom({
  key: "toDo",
  default: [],
});

const ToDoList = () => {
  const { register, handleSubmit, setValue } = useForm<Form>({});

  const handleValid = () => {
    setValue("toDo", "");
  };

  return (
    <Container>
      <Title>ToDo List</Title>
      <Form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please Wirte a ToDo!",
          })}
          type="text"
          placeholder="Write a ToDo!"
        />
        <input type="submit" value={"ADD"} />
      </Form>
      <ul>
        <li>리액트 복습하기</li>
        <li>스타벅스 가서 커피 한잔</li>
      </ul>
    </Container>
  );
};

export default ToDoList;
