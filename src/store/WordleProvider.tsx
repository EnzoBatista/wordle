import WordleContext from './wordle-context';
import { useToggle } from '../hooks';

const WordleProvider = (props:any) => {
    const [modalStatus, setModalStatus] = useToggle(true);

  return (
    <WordleContext.Provider
      value={{
        modalStatus: modalStatus,
        modalToggle: setModalStatus
      }}
    >
      {props.children}
    </WordleContext.Provider>
  );
};

export default WordleProvider;
