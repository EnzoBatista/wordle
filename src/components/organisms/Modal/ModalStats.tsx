import React, { useContext } from "react";
import styled, { useTheme } from "styled-components";
import { ScoreBoard } from "../../molecules";
import { Text, Button } from "../../atoms";
import Counter from "../../molecules/Counter/Counter";
import { WordleContext } from "../../../store";

const StyleScoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ModalStats = () => {
  const { modalToggle } = useContext(WordleContext);
  const theme = useTheme();
  return (
    <div>
      <StyleScoreWrapper>
        <ScoreBoard label={"JUGADAS"} score={8} />
        <ScoreBoard label={"VICTORIAS"} score={6} />
      </StyleScoreWrapper>
      <Text align="center">
        La palabra era: <strong>PERRO</strong>
      </Text>
      <Text align="center">SIGUIENTE PALABRA</Text>
      <Counter time={"4:15"} />
      <Text align="center">
        <Button
          onClick={modalToggle}
          bgColor={theme.palette.green}
          txtColor={theme.palette.white}
        >
          ACEPTAR
        </Button>
      </Text>
    </div>
  );
};

export default ModalStats;
