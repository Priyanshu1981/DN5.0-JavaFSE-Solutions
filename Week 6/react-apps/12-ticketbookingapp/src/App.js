import React from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

// Hands-on 12: Conditional rendering using an element variable —
// `page` is assigned one of two possible elements before being rendered.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    // Element variable — holds whichever component should render this pass.
    let page;
    if (this.state.isLoggedIn) {
      page = <UserPage />;
    } else {
      page = <GuestPage />;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h1>Flight Ticket Booking</h1>
        {this.state.isLoggedIn ? (
          <button onClick={this.handleLogout}>Logout</button>
        ) : (
          <button onClick={this.handleLogin}>Login</button>
        )}
        {page}
      </div>
    );
  }
}

export default App;
