import { useContext, useState } from "react";
import { ModalTypes } from "../../enums";
import { WordleContext } from "../../store";
import { useTheme } from "styled-components";
import { Modal } from "../templates/modal";

const Home = () => {
  const { modalStatus, modalToggle } = useContext(WordleContext);
  const [modalContent, setModalContent] = useState<number>(0);
  const theme = useTheme();

  const showInstructionsHandler = () => {
    modalToggle();
    setModalContent(ModalTypes.INSTRUCTIONS);
  };
  const showStats = () => {
    modalToggle();
    setModalContent(ModalTypes.STATS);
  };

  return (
    <>
      <Modal
        title={"Cómo jugar"}
        modalType={modalContent}
        isOpen={modalStatus}
        modalToggle={modalToggle}
      />
      <button onClick={showInstructionsHandler}>SHOW INSTRUCTIONS</button>
      <button onClick={showStats}>SHOW STATS</button>
    </>
  );
};

export default Home;
