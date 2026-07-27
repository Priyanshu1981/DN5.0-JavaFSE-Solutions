import React from 'react';
import Cart from './Cart';

class OnlineShopping extends React.Component {
  render() {
    return (
      <div>
        <h1>Online Shopping</h1>
        <Cart Itemname="Wireless Mouse" Price={799} />
        <Cart Itemname="Mechanical Keyboard" Price={2999} />
        {/* No props passed here — demonstrates defaultProps on Cart */}
        <Cart />
      </div>
    );
  }
}

export default OnlineShopping;
