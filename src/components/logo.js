import React from 'react';

const bool = 3;

class Logo extends React.Component {
  render() {
    if (bool == 1) {
      return (
          <div>hello dzj</div>
      )
    } else {
      return (
          <div>hello dzj22333</div>
      )
    }
  }
}

export default Logo;
