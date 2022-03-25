import styled from "styled-components";

export const Submit = styled.button`
  border-radius: 40px;
  height: 40px;
  width: 50px;
  border: none;
  cursor: pointer;
`;
export const InputField = styled.input`
  height: 40px;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  font-size: large;
  border: none;
`;

export const TopField = styled.div`
  display: flex;
  gap: 30px;
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Container = styled.div`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const OrderList = styled.ol`
  font-size: large;
  color: skyblue;
`;

export const DelItem = styled.button`
  border: none;
  border-radius: 15px;
  margin-left: 10px;
  height: 20px;
  width: 20px;
  background-color: red;
  font-size: x-small;
  cursor: pointer;
`;
