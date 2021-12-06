const redux = require('redux')

/* reducer function (has to be a pure function): called by redux library, always recieves two inputs: the old state and action to perform; and must return a new state object, that replaces the old state */
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type == 'decrement') {
    return {
      counter: state.counter - 1
    }
  }

  return state
}

const store = redux.createStore(counterReducer) /* creating a store/state */

const counterSubscriber = () => {
  const latestState = store.getState() /* gives the lates state */
  console.log(latestState)
}

store.subscribe(counterSubscriber) /* expects a function */

/* action dispatch: type makes each function unique */
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })

