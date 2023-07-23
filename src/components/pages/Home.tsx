import { useContext, useState } from "react";
import { ModalTypes } from "../../enums";
import { WordleContext } from "../../store";
import { useTheme } from "styled-components";
import { Modal } from "../templates/modal";
import { createPortal } from "react-dom";

const Home = () => {
  const { modalStatus, modalToggle } = useContext(WordleContext);
  const [modalType, setModalType] = useState<number>(0);
  const theme = useTheme();

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
          title={modalType === ModalTypes.INSTRUCTIONS ? "Cómo jugar" : "Estadísticas"}
          modalType={modalType}
          isOpen={modalStatus}
          modalToggle={modalToggle}
        />,
        document.body
      )}
      <button onClick={showInstructionsHandler}>SHOW INSTRUCTIONS</button>
      <button onClick={showStats}>SHOW STATS</button>
    </>
  );
};

export default Home;
