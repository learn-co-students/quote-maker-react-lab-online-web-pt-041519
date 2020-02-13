export default (state = [], action) => {
  let idx
  let qut
  switch (action.type) {
    case 'ADD_QUOTE':

      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      qut = state[idx]
      console.log('upvote', action.quoteId)
      return [
        ...state.slice(0, idx), 
        Object.assign({}, qut, {votes: (qut.votes += 1)}), 
        ...state.slice(idx + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      qut = state[idx]
      console.log('downvote', action.quoteId)
      if(qut.votes > 0) {
        return [
          ...state.slice(0, idx), 
          Object.assign({}, qut, {votes: (qut.votes -= 1)}), 
          ...state.slice(idx + 1)
        ];
      }
      return state

  default:
    return state;
  }    
}