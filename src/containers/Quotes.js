import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    // has access to this.props.quotes

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
              {/* {this.props.quotes.map()} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => ({
  removeQuote: id => dispatch({ type: 'REMOVE_QUOTE', id })
})


export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
