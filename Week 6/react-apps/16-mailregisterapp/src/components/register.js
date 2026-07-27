import React from 'react';

// Hands-on 16: Validate name (>=5 chars), email (contains @ and .),
// and password (>=8 chars), wired through onChange and onSubmit handlers.
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  validate() {
    const { name, email, password } = this.state;
    const errors = {};

    if (name.length < 5) {
      errors.name = 'Name should have at least 5 characters';
    }
    if (!email.includes('@') || !email.includes('.')) {
      errors.email = 'Email should have @ and .';
    }
    if (password.length < 8) {
      errors.password = 'Password should have at least 8 characters';
    }
    return errors;
  }

  handleSubmit(event) {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      alert(`Registration successful for ${this.state.name}!`);
    }
  }

  render() {
    const { name, email, password, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Register</h2>

        <div>
          <label>Name: </label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
          {errors.name && <span style={{ color: 'red' }}> {errors.name}</span>}
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Email: </label>
          <input type="text" name="email" value={email} onChange={this.handleChange} />
          {errors.email && <span style={{ color: 'red' }}> {errors.email}</span>}
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Password: </label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          {errors.password && <span style={{ color: 'red' }}> {errors.password}</span>}
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>Register</button>
      </form>
    );
  }
}

export default Register;
