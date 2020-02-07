
export default (state = [], action) => {
  let idx
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    case 'UPVOTE_QUOTE':
      let index = state.findIndex(quote => quote.id === action.quoteId)
      let newQuote = {...state[index]}
      newQuote.votes += 1
      let newState = [...state]
      newState[index] = newQuote
      return newState
    case 'DOWNVOTE_QUOTE':
      let downvotedIndex = state.findIndex(quote => quote.id === action.quoteId)
      let downvotedQuote = {...state[downvotedIndex]}
      if (downvotedQuote.votes > 0) {
      downvotedQuote.votes -= 1
      let downvotedState = [...state]
      downvotedState[downvotedIndex] = downvotedQuote
      return downvotedState
      }

      default:
        return state;

  }
  
}
