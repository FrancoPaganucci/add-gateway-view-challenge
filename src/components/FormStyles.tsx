import styled from "styled-components";

const StyledForm = styled.form`
  width: 430px;
  max-height: 400px;
  display: flex-column;
  padding: 50px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 20px 30px 20px rgb(0 0 0 / 10%);
`;
const StyledLabel = styled.label`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-bottom: 8px;
`;
const StyledInput = styled.input`
  border-radius: 40px;
  height: 36px;
  border: none;
  background-color: #f5f5f5;
  padding: 2px 15px;
`;

const StyledFormLogo = styled.div`
  background-image: url("https://rebill.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc9c2e716-ba65-4698-84ea-fd6907cc75aa%2FUntitled.png?id=23226cee-a883-4cc0-b1e1-18d61a9edacd&table=block&spaceId=2a97411f-39ec-4af0-b17b-04538c236891&width=520&userId=&cache=v2");
  display: block;
  height: 50px;
  width: 150px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledSubmit = styled.input`
  height: 45px;
  width: 100px;
  border-radius: 55px;
  background-color: #2580ff;
  color: #fff;
  border: none;
  cursor: pointer;
`;
const StyledCancel = styled.button`
  align-text: center;
  height: 45px;
  width: 100px;
  border-radius: 55px;
  background-color: #fff;
  color: grey;
  border: solid 1px grey;
  text-align: center;
  cursor: pointer;
`;
const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 30px;
`;

const ErrorSpan = styled.div`
  color: red;
  margin-top: 0px;
  font-size: 13px;
  position: relative;
  top: -8px;
  left: 6px;
`

export {
  StyledForm,
  StyledFormLogo,
  StyledInput,
  StyledLabel,
  StyledSubmit,
  StyledCancel,
  StyledButtonsContainer,
  ErrorSpan
};
