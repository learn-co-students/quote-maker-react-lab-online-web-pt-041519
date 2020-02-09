export default (state = [], action) => {
  let idx;
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx];
      return [
        ...state.slice(0, idx),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(idx + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, idx),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(idx + 1)
        ];
      }
      return state;

    default: 
      return state;
  }
}



// import uuid from "uuid";

// export default (state = [], action) => {
//   let idx;
//   switch (action.type) {
//     case "ADD_QUOTE":
//       return [...state, { id: uuid(), content: action.content, author: action.author }];

//     case "REMOVE_QUOTE":
//       idx = state.findIndex(quote => quote.id  === action.id)
//       return [...state.slice(0, idx), ...state.slice(idx + 1)];

//     case "UPVOTE_QUOTE":
//       return [...state, { id: uuid(), content: action.content, author: action.author }];
  
//     case "DOWNVOTE_QUOTE":
//       return [...state, { id: uuid(), content: action.content, author: action.author }];      

//     default:
//       return state;
//   }
// }

// Output
// [
//   {
//     id: '23423424242-42342423424242-fafdb',
//     content: 'One Awesome Quote',
//     author: 'Luke Ghenco'
//   }
// ]