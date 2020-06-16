
const initialState =
{
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true
};





const historyReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case 'UPDATE_FIELD':
            let copy = state.history[state.history.length - 1].squares.slice();
            copy[action.payload.fieldNumber] = state.xIsNext ? 'X' : 'O';

            let squares = { squares: copy }
            const history = state.history;
            history.push(squares);


            state = {
                ...state,
                history: history,
                xIsNext: !state.xIsNext
            }
            return state;
            
        case 'CHANGETOX':
            console.log('changed')
            state = {
                ...state,
                xIsNext: action.payload
            }

            return state;



        default:
            return state;
    }

}

export default historyReducer;