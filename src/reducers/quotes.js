export default (state = [], action) => {
  let index;
  let quote;
  switch(action.type) {  
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, index), ...state.slice(index + 1)];

    case 'UPVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId)
      return [Object.assign( {}, quote, {votes: quote.votes += 1} )];

    case 'DOWNVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId)
      if (quote.votes > 0) {
        return [Object.assign( {}, quote, {votes: quote.votes -= 1})];
      }
    
    default:
      return state;
  }
}
