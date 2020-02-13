export function addQuote(quote){
    return {
        type: 'ADD_QUOTE',
        quote: {
            author: quote.author,
            content: quote.content,
            id: quote.id,
            votes: quote.votes
        }
    }
}

export function removeQuote(integer){
    return{
        type: 'REMOVE_QUOTE',
        quoteId: integer
    }
}

export function upvoteQuote(integer){
    return {
        type: 'UPVOTE_QUOTE',
        quoteId: integer
    }
}

export function downvoteQuote(integer){
    return{
        type: 'DOWNVOTE_QUOTE',
        quoteId: integer
    }
}