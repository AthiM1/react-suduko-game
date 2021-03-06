import React, { useEffect } from 'react';

import useActiveSudokuCell from './userActiveSodukuCell';
import useSudokuInput from './userSodukuInput';
import './cell.css';

export const Cell = ({ x, y, gameValue, showValue, checkResult }) => {

    let active = '';
    let reveal = '';
    const activeCell = useActiveSudokuCell();
    const isActive = x + '' === activeCell.x && y + '' === activeCell.y;
    const {
        currentInput,
        onSudokuInput   
    } = useSudokuInput(isActive);
    if(isActive){
        active = ' active';
    }

    useEffect(() => {
        if(showValue){
            onSudokuInput({ key: gameValue }, true, checkResult);
        }
    }, [showValue, onSudokuInput, checkResult, gameValue ]);

    useEffect(() => {

        const onKeyDown = (e) => {
            onSudokuInput(e, false, checkResult);
        }

        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        }

    }, [checkResult, onSudokuInput]);
    
    if(checkResult){
        if( gameValue === currentInput ){
            reveal = ' correct';
        } else {
            reveal = ' wrong';
        }
    } else {
        if( isActive ){
            reveal = ' active-bg'
        }
    }

    return (
        <span
            data-name="sudoku-cell"
            data-x={x}
            data-y={y}
            data-gamevalue={gameValue}
            className={'cell'+active+reveal}>
            <span className='cell-value'>{currentInput}</span>
        </span>
    );
}

export default Cell;