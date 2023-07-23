import styled, { useTheme } from "styled-components";

const StyledDialog = styled.div`
  width: 100%;
  max-width: 600px;
  height: fit-content;
  max-height: 80vh;
  min-height: 50vh;
  padding: 30px;
  border-radius: 5px;
  border: solid 2px;
  border-color: ${(props) => props.theme.palette.black};
  background-color: ${(props) => props.theme.palette.grayLight};
`;

const Dialog = ({ children }:any) => {
  const theme = useTheme();
  return <StyledDialog>{children}</StyledDialog>;
};

export default Dialog;
