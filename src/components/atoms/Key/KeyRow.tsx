import { ReactNode } from "react";
import styled from "styled-components";

const StyledKeyRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const KeyRow = ({ children }: {children: ReactNode}) => {
  return <StyledKeyRow>{ children }</StyledKeyRow>;
};

export default KeyRow;
