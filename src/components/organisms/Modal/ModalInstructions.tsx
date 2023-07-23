import React, { useContext } from "react";
import { WordleContext } from "../../../store";
import { useTheme } from "styled-components";
import { Key } from "../../atoms";
import { WordsExample } from "../../../enums";
import { KeyRow, Button, Text } from "../../atoms";
import { uid } from "../../../utils";

const ModalInstructions = () => {
  const theme = useTheme();
  const { modalToggle } = useContext(WordleContext);
  const startPlayingHandler = () => {
    modalToggle();
  };

  return (
    <div className="w-full">
      <Text>Adivina la palabra oculta en cinco intentos.</Text>
      <Text>Cada intento debe ser una palabra válida de 5 letras.</Text>
      <Text>
        Después de cada intento el color de las letras cambia para mostrar qué
        tan cerca estás de acertar la palabra.
      </Text>

      <h3>Ejemplos</h3>
      <KeyRow>
        {Object.values(WordsExample.GATOS).map(
          (word: string, index: number) => {
            let color = index === 0 ? theme.palette.green : theme.palette.white;
            return <Key key={uid()} letter={word} color={color} />;
          }
        )}
      </KeyRow>

      <Text>
        La letra <strong>G</strong> está en la palabra y en la posición
        correcta.
      </Text>

      <KeyRow>
        {Object.values(WordsExample.VOCAL).map(
          (word: string, index: number) => {
            let color =
              index === 2 ? theme.palette.yellow : theme.palette.white;
            return <Key key={uid()} letter={word} color={color} />;
          }
        )}
      </KeyRow>
      <p>
        La letra <strong>C</strong> está en la palabra pero en la posición
        incorrecta.
      </p>
      <KeyRow>
        {Object.values(WordsExample.CANTO).map(
          (word: string, index: number) => {
            let color = index === 4 ? theme.palette.green : theme.palette.white;
            return <Key key={uid()} letter={word} color={color} />;
          }
        )}
      </KeyRow>
      <Text>
        La letra <strong>O</strong> no está en la palabra.
      </Text>
      <br />
      <Text>
        Puede haber letras repetidas. Las pistas son independientes para cada
        letra.
      </Text>
      <div>
        <Text align="center">¡Una palabra nueva cada 5 minutos!</Text>
        <Text align="center">
          <Button
            bgColor={theme.palette.green}
            onClick={startPlayingHandler}
            txtColor={theme.palette.white}
          >
            !JUGAR¡
          </Button>
        </Text>
      </div>
    </div>
  );
};

export default ModalInstructions;
