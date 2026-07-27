import React from 'react';

// Hands-on 11: Handle various events (click, change) using the `this`
// keyword and React's SyntheticEvent.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      greeting: '',
      textValue: ''
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // The "Increase" button invokes multiple methods:
  // 1) increments the counter, 2) shows a static greeting message.
  handleIncrement() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    this.sayHello();
  }

  sayHello() {
    this.setState({ greeting: 'Hello! Counter increased.' });
  }

  handleDecrement() {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  // SyntheticEvent — React wraps the native browser event in a
  // cross-browser wrapper object (event.target etc. work the same way
  // in every browser).
  handleChange(event) {
    this.setState({ textValue: event.target.value });
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Event Handling Examples</h1>

        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement} style={{ marginLeft: '10px' }}>Decrement</button>
        <p>{this.state.greeting}</p>

        <div style={{ marginTop: '20px' }}>
          <input type="text" onChange={this.handleChange} placeholder="Type something..." />
          <p>You typed: {this.state.textValue}</p>
        </div>
      </div>
    );
  }
}

export default App;
