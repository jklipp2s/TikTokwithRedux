const stepnumberReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;



        case 'JUMP':

         


            return state = action.payload;

        default:
            return state;
    }

}

export default stepnumberReducer;