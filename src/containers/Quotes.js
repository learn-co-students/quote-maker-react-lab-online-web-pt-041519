import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  upvoteQuote, 
  downvoteQuote, 
  removeQuote,  
} from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';



class Quotes extends Component {

  render() {
    const {upvoteQuote, downvoteQuote, removeQuote, quotes } = this.props
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
                {quotes.map(quote => (
                  <QuoteCard 
                    key={quote.id}
                    upvoteQuote={upvoteQuote}
                    downvoteQuote={downvoteQuote}
                    removeQuote={removeQuote}
                    quote={quote}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}



//add arguments to connect as needed
export default connect(
  mapStateToProps, 
  {upvoteQuote, downvoteQuote, removeQuote}
)(Quotes);
