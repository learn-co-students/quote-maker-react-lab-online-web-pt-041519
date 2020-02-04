import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {
  removeQuote,
  upvoteQuote,
  downvoteQuote
} from '../actions/quotes'

class Quotes extends Component {

  render() {

    const quotes = this.props.quotes.map(q => <QuoteCard 
      content={q.content}
      author={q.author}
      votes={q.votes}
      id={q.id}
      key={q.id}
      removeQuote={(id)=>this.props.remove(id)}
      upvoteQuote={(id)=>this.props.upvote(id)}
      downvoteQuote={(id)=>this.props.downvote(id)}

    />)
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
              {console.log(this.props)}
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quotes }) => ({quotes})

const mapDispatchtoProps = (dispatch) => ({
  upvote: (id) => dispatch(upvoteQuote(id)),
  downvote: (id) => dispatch(downvoteQuote(id)),
  remove: (id) => dispatch(removeQuote(id))
})

export default connect(mapStateToProps, mapDispatchtoProps)(Quotes);
