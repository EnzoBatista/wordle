import React from "react";
import styled from "styled-components";

type Key = {
  letter: string;
  color: string;
};

const StyledKey = styled.div`
  width: 76px;  
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border-radius: 4px;
  font-size: 35px;
  font-family: "Roboto";
  border: ${props => props.color === props.theme.palette.white ? `solid 1px ${props.theme.palette.black}` : "none"};
  background-color: ${props => props.color};
`;

const Key = ({letter, color}: Key) => {
  return <StyledKey color={color}> {letter} </StyledKey>;
};

export default Key;
