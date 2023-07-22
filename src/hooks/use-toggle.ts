import { useState } from "react";
type useToggleType = [
    boolean,
    () => void,
];

const useToggle = (initial: boolean = false) : useToggleType => {
  const [toggleValue, setToggleValue] = useState<boolean>(initial);

  const onToggle = () => setToggleValue(prevState => !prevState);

  return [toggleValue, onToggle];
};

export default useToggle;
