export type colorType = 'white' | '#333333'
const initState = {
    themeColor: '#333333'
}
export type initStateType = typeof initState
const SET_COLOR = "SET_COLOR"

export const appPortFolioReducer = (state: initStateType = initState, action: somethingACType): initStateType => {
    switch (action.type) {
        case 'SET_COLOR':
            return {
                ...state,
                themeColor: action.color
            }
        default:
            return state
    }
}

export const setFormVisibilityAC = (color: colorType) => ({type: SET_COLOR, color} as const)
export type somethingACType = ReturnType<typeof setFormVisibilityAC>