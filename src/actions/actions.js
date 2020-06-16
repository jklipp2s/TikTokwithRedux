export const updateStepnumber = () => ({
    type: 'INCREASE' 
})

export const updateHistory = (id, step) => ({
    type: 'UPDATE_FIELD',
    payload: {
        fieldNumber: id,
        step: step
    }
})


export const change = (bool) => ({
type: 'CHANGETOX',
payload: bool
})

export const jump = (step) => ({
    type: 'JUMP',
    payload: step
})