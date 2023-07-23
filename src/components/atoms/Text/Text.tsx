import { ReactNode } from "react";
import { styled, useTheme } from "styled-components";

type Text = {
  $align?: string;
};

const StyledText = styled.p<Text>`
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: ${(props) => props.$align};
  color: ${(props) => props.theme.palette.black};
`;
const Text = ({ children, align }: { children: ReactNode; align?: string }) => {
  const theme = useTheme();
  return <StyledText $align={align ?? "left"}>{children}</StyledText>;
};

export default Text;
