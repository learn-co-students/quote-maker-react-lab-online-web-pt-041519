export default (state = [], action) => {

  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      console.log(state.quote.votes)
      console.log(action)
      return [...state, action.quote.votes + 1]
    case 'DOWNVOTE_QUOTE':
      return [...state]
      // , action.quoteId + 1
    default:
      return state
  }
}
