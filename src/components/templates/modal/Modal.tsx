import React, { BaseSyntheticEvent, lazy, useEffect } from "react";
import { ModalTypes } from "../../../enums";
import styled from "styled-components";
import Dialog from "../../molecules/Dialog/Dialog";
import { ModalStats, ModalInstructions } from "../../organisms/Modal";

type ModalType = {
  isOpen: boolean;
  modalToggle: () => void;
  title: string;
  modalType: number;
}

type ModalStyles = {
  open: boolean;
  theme: object;
}

const StyledModal = styled.div<ModalStyles>`
  position: absolute;
  display: ${(props) => (props.open === true ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: ${(props) => props.theme.palette.grayLight};
`;

const Modal = ({
  isOpen,
  modalToggle,
  title,
  modalType,
}: ModalType) => {

  const overlayClickHandler = (event: BaseSyntheticEvent) => {
    if (event.target.childElementCount === 1) {
      modalToggle();
    }
  };

  const modalContent =
    modalType === ModalTypes.INSTRUCTIONS ? (
      <ModalInstructions />
    ) : (
      <ModalStats />
    );

  return (
    <StyledModal
      onClick={overlayClickHandler}
      open={isOpen}
    >
      <Dialog
        onClick={overlayClickHandler}
        isOpen={isOpen}
        modalToggle={modalToggle}
        title={title}
        modalType={modalType}
      >
        {modalContent}
      </Dialog>
    </StyledModal>
  );
};

export default Modal;
