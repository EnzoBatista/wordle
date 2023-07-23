import { ReactNode } from "react";
import styled, { useTheme } from "styled-components";

const DialogTitle = styled.h2`
text-align: center;
font-size: 35px;
`;

const StyledDialog = styled.div`
  width: 100%;
  max-width: 546px;
  height: fit-content;
  max-height: 80vh;
  overflow: auto;
  min-height: 50vh;
  padding: 35px;
  border-radius: 5px;
  border: solid 2px;
  border-color: ${(props) => props.theme.palette.black};
  background-color: ${(props) => props.theme.palette.graySuperLight};
`;

const Dialog = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const theme = useTheme();
  return (
    <StyledDialog>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </StyledDialog>
  );
};

export default Dialog;
