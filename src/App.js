import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

import {getServices} from './actions';

export class UnconnectedApp extends Component {
  componentDidMount() {
    // get the secret word
    this
      .props
      .getServices();
  }

  render() {
    return (
      <div className="container">
        <p>hello there</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {getData} = state;
  return {getData};
}

export default connect(mapStateToProps, {getServices})(UnconnectedApp);
