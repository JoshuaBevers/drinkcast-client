/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import Button from './Button';

const GameStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: none;
  padding: 10px;
  
  h1 {
    margin: 5%;
  }

  h2 {
    margin: 2.5%;
  }

  p {
    font-size: 20px;
  }

  .select {
    width: 300px;
    color: var(--black);
  }

  button { 
    /* margin-top: 80px; */
  }

  .selectGame {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5), 0 6px 20px 0 rgba(0,0,0,0.49);
  }
`;

const RoundText = styled.div`
  min-height: 200px;
`;


const options = [
  { value: 'Never Have I Ever', label: 'Never Have I Ever' },
  { value: 'Would You Rather', label: 'Would You Rather' },
];


const Game = ({
  gameStart,
  gameSelected,
  roundText,
  getRoundText,
  startGame,
  changeGame,
}) => (
    <GameStyled>
      {gameSelected === null ? (
        ''
      ) : (
          // eslint-disable-next-line react/jsx-one-expression-per-line
          <h1>{gameSelected} </h1>
        )}

      {gameStart ? (
        <div className="selectGame">
          <Select
            classNamePrefix="selectOption"
            className="select"
            options={options}
            placeholder="Choose Your Game!"
            value=""
            onChange={(value) => changeGame(value)}
          >
            <option value="neverhaveiever">NEVER</option>
          </Select>
        </div>
      ) : (
          <Button url="" inputProps={{ readOnly: true }} type="button" action={startGame} className="">
            Start Game
          </Button>
        )}
      <RoundText>
        {roundText !== '' ? <h2>{roundText}</h2> : ''}
      </RoundText>
      {gameStart ? (
        gameSelected !== null ? (
          <Button url="" type="button" action={getRoundText} className="">
            New Round
          </Button>
        ) : (
            ''
          )
      ) : (
          ''
        )}

    </GameStyled>
  );

export default Game;
