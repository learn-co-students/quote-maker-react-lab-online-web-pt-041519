export default (state = [], action) => {

  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      return state.map(q => ({ ...q, votes: q.votes + 1 }))
    case 'DOWNVOTE_QUOTE':
      return state.map(q => q.votes !== 0 ? { ...q, votes: q.votes - 1 } : q )
    default:
      return state
  }
}
