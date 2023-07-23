import React, { useContext, useEffect, useReducer, useState } from "react";
import { ModalTypes } from "../../enums";
import { WordleContext } from "../../store";
import { useTheme } from "styled-components";
import { Modal } from "../templates/modal";
import { createPortal } from "react-dom";
import { useCatalog } from "../../hooks";

const boardReducer = (state:any, action:any) => {
  if (action.type === "ADD_LETTER") {
    if (state.counter === 5) return;
    let updatedLetters = state.letters.push(action.letter);

    return {
      letters: updatedLetters,
      counter: ++state.counter,
    };
  }

  return {
    letters: [],
    counter: 0,
  };
};

const Home = () => {
  const { modalStatus, modalToggle, sessionID, setSession } =
    useContext(WordleContext);

  const theme = useTheme();

  const [word, setWord, getCatalog, getRandom, getCorrectIndexes, isInWord] =
    useCatalog();

  const [modalType, setModalType] = useState<number>(0);

  const [board, dispatchBoard] = useReducer<any>(boardReducer, {
    letters: [],
    counter: 0,
  });

  useEffect(() => {
    setModalType(ModalTypes.INSTRUCTIONS);
    modalToggle();
    if (sessionID !== 1) {
      setSession();
    }
  }, [sessionID]);

  // useEffect(() => {
  //   console.log("CATALOGO: ", getCatalog());
  //   console.log("RANDOM_WORD: ", getRandom());
  //   console.log("RANDOM_WORD: ", getCorrectIndexes("mojer"));
  // }, []);

  // const addLetterHandler = (item) => {
      
  // };

  const keyDownHandler = (event: any) => {
    console.log("KEY: ", event.key);
    dispatchBoard({ type: 'ADD_ITEM', letter: event.key });
    // addLetterHandler();
  };

  window.addEventListener("keydown", keyDownHandler);

  const showInstructionsHandler = () => {
    modalToggle();
    setModalType(ModalTypes.INSTRUCTIONS);
  };
  const showStats = () => {
    modalToggle();
    setModalType(ModalTypes.STATS);
  };

  return (
    <>
      {createPortal(
        <Modal
          title={
            modalType === ModalTypes.INSTRUCTIONS
              ? "Cómo jugar"
              : "Estadísticas"
          }
          modalType={modalType}
          isOpen={modalStatus}
          modalToggle={modalToggle}
        />,
        document.body
      )}
      {sessionID === 1 && (
        <button onClick={showInstructionsHandler}>SHOW INSTRUCTIONS</button>
      )}

      <button onClick={showStats}>SHOW STATS</button>
    </>
  );
};

export default Home;
