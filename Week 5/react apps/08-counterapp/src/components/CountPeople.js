import React from 'react';

// Hands-on 8: Track number of people entering/exiting a mall using
// constructor + state, updated via two button click handlers.
class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
    this.UpdateEntry = this.UpdateEntry.bind(this);
    this.UpdateExit = this.UpdateExit.bind(this);
  }

  UpdateEntry() {
    this.setState((prevState) => ({ entrycount: prevState.entrycount + 1 }));
  }

  UpdateExit() {
    this.setState((prevState) => ({ exitcount: prevState.exitcount + 1 }));
  }

  render() {
    return (
      <div>
        <h1>Mall Entry / Exit Counter</h1>
        <p>People entered: {this.state.entrycount}</p>
        <p>People exited: {this.state.exitcount}</p>
        <button onClick={this.UpdateEntry}>Login</button>
        <button onClick={this.UpdateExit} style={{ marginLeft: '10px' }}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
