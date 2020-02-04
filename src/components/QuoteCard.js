import React from 'react';

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.content}</p>
          <footer>- author {props.author}<cite title="Source Title"></cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={e=> props.upvoteQuote(props.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={e => props.downvoteQuote(props.id)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={e => props.removeQuote(props.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {props.votes}</div> 
      </div>
    </div>
  </div>;

export default QuoteCard;
