export function headerTextReducer(state = {text: ''}, action) {
  if (action.type === 'SET_TEXT') {
    return {
      ...state,
      text: action.payload,
    }
  } else return state
}

export const setText = text => ({
  type: 'SET_TEXT',
  payload: text,
})
