import styled from "styled-components";

export const StyledEvent = styled.li`
  width: 250px;
  height: 180px;
  background-color: orange;
  outline: 2px solid red;
  padding: 20px;

  & h2 {
    font-size: 20px;
    font-family: Roboto;
    margin-bottom: 10px;
  }

  & .time {
    font-size: 15px;
    font-family: Roboto;
    margin-bottom: 6px;
  }
`;

export const StyledText = styled.p`
  font-size: 15px;
  font-family: Roboto;
  margin-bottom: 6px;
  color: ${(props) => props.theme.color};
`;
