import { ReactNode, SyntheticEvent } from "react";
import { styled, useTheme } from "styled-components";

type Button = {
  children: ReactNode;
  onClick: () => void | React.MouseEvent<HTMLButtonElement>;
  bgColor: string;
  txtColor: string;
};

type styledButtonType = {
  onClick: () => void | React.MouseEvent<HTMLButtonElement>;
  bgcolor: string;
  txtcolor: string;
};

const StyledButton = styled.button<styledButtonType>`
  width: 256px;
  height: 44px;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.bgcolor ?? props.theme.palette.green};
  color: ${(props) => props.txtcolor ?? props.theme.palette.white};

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ children, onClick, bgColor, txtColor }: Button) => {
  const theme = useTheme();

  return (
    <StyledButton bgcolor={bgColor} txtcolor={txtColor} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
