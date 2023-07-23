import styled from "styled-components";
import { Text } from "../../atoms";

type ScoreBoard = {
  score: number;
  label: string;
};
const StyledScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledScore = styled.h3`
  margin-bottom: 5px;
  font-size: 30px;
  font-weight: bold;
`;

const ScoreBoard = ({ score, label }: ScoreBoard) => {
  return (
    <StyledScoreBoard>
      <StyledScore>{score}</StyledScore>
      <Text>{label}</Text>
    </StyledScoreBoard>
  );
};

export default ScoreBoard;
