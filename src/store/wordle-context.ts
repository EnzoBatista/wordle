import React from "react";

type initialCtxType = {
  modalStatus: boolean;
  modalToggle: () => void;
  sessionID: number | null;
  setSession: () => void;
};

const initialCtx: initialCtxType = {
  modalStatus: false,
  modalToggle: () => {},
  sessionID: null,
  setSession: () => {},
};

const WordleContext = React.createContext(initialCtx);

export default WordleContext;
