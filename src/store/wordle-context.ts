import React from "react";

type initialCtxType = {
  modalStatus: boolean;
  modalToggle: () => void;
};

const initialCtx: initialCtxType = {
  modalStatus: true,
  modalToggle: () => {}
};

const WordleContext = React.createContext(initialCtx);

export default WordleContext;
