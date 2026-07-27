import React from 'react';

// Hands-on 15: Controlled form components (textbox + textarea) with a
// handleSubmit event that generates a reference number.
class ComplaintRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      complaint: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleComplaintChange = this.handleComplaintChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ employeeName: event.target.value });
  }

  handleComplaintChange(event) {
    this.setState({ complaint: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const referenceNumber = 'REF-' + Math.floor(100000 + Math.random() * 900000);
    alert(
      `Complaint registered for ${this.state.employeeName}.\n` +
      `Reference Number: ${referenceNumber}`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Complaint Register</h2>
        <div>
          <label>Employee Name: </label>
          <input
            type="text"
            value={this.state.employeeName}
            onChange={this.handleNameChange}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Complaint: </label>
          <br />
          <textarea
            value={this.state.complaint}
            onChange={this.handleComplaintChange}
            rows={4}
            cols={40}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Submit Complaint</button>
      </form>
    );
  }
}

export default ComplaintRegister;
