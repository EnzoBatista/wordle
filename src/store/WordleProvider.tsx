import WordleContext from "./wordle-context";
import { useToggle } from "../hooks";
import { useState } from "react";

const WordleProvider = (props: any) => {
  const [modalStatus, setModalStatus] = useToggle(false);
  const [sessionID, setSessionID] = useState<number | null>(null);

  const setSession = () => {
    if (!localStorage.getItem("sessionID")) {
      localStorage.setItem("sessionID", "1");
      setSessionID(prevState => {
        return prevState === null ? 1 : 0;
      });
    }
  };

  return (
    <WordleContext.Provider
      value={{
        modalStatus: modalStatus,
        modalToggle: setModalStatus,
        sessionID,
        setSession,
      }}
    >
      {props.children}
    </WordleContext.Provider>
  );
};

export default WordleProvider;
