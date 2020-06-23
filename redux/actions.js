export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'


export function increment(value) { 
  return {
    type: INCREMENT, 
    value: value
  }
}


export function decrement(value) {
  return {
    type: DECREMENT, 
    value
  }
}


