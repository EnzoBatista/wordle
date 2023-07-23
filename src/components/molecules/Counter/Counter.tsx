import { Text } from "../../atoms";
const Counter = ({ time }: { time: string }) => {
  return (
    <Text align="center">
      <strong>{time}</strong>
    </Text>
  );
};

export default Counter;
