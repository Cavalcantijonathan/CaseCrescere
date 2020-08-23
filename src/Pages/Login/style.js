import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
  display: flex;
  max-width: 800px;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  border-radius: 4px;
  margin: 80px auto;
  h1 {
    font-size: 20px;
    margin-top: 15px;
    align-items: center;
    display: flex;
    flex-direction: row;
  }
  img {
    max-width: 300px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  input {
    padding: 10px;
    margin: 4px;
    border-radius: 5px;
    width: 300px;
    height: 50px;
    border-color: #45B34A;
  }
  button {
    padding: 10px;
    border-radius: 5px;
    width: 300px;
    margin: 4px;
    margin-top: 30px;
    background-color: #45B34A;
    color: #fff;
    height: 50px;
    font-size: 14px;
    border: none;
  }
  button:hover {
    cursor: pointer;
    background-color: #36873A;
  }
  display: flex;
  flex-direction: column;
`;

export const ButtonLink = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #45B34A;
  margin: 10px;
  a {
    text-decoration: none;
    color: #fff;
  }
  &:hover {
    background-color: #36873A;
    cursor: pointer;
  }
  `;
