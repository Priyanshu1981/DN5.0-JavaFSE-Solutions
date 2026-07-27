import React from 'react';

// Hands-on 7: Cart class component with Itemname and Price properties,
// demonstrating props and defaultProps.
class Cart extends React.Component {
  render() {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '8px' }}>
        <p><strong>Item Name:</strong> {this.props.Itemname}</p>
        <p><strong>Price:</strong> ₹{this.props.Price}</p>
      </div>
    );
  }
}

// Default props are used when a prop is not explicitly passed by the parent.
Cart.defaultProps = {
  Itemname: 'Unnamed Item',
  Price: 0
};

export default Cart;
