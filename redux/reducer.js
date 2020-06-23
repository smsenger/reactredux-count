
import { INCREMENT, DECREMENT, INCREMENT_FIVE, DECREMENT_FIVE } from './actions'


const initialState = { 
  count: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
    return {
      count: state.count + action.value
    }

    case DECREMENT:
    return {
      count: state.count - action.value
    }

      break;
    default:
      return state;
  }
}

export default reducer;