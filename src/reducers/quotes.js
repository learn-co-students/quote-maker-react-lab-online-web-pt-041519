
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
      let quote = [...state.slice(0, index + 2)]
      quote[0].votes = quote[0].votes + 1
      
      default:
        return state;

  }
  
}
